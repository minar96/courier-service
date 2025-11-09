<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use App\Models\UserToken;
use Exception;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;
use Throwable;

class AuthController extends Controller
{
    // ---------------- Registration ----------------
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'mobile_no' => 'required|string|unique:users,mobile_no',
            'password' => 'required|string|min:6|confirmed',
            'role_id' => 'nullable|exists:roles,id'
        ]);

        DB::beginTransaction();
        try {
            $user = User::create([
                'name' => $request->name,
                'mobile_no' => $request->mobile_no,
                'password' => Hash::make($request->password),
                'role_id' => $request->role_id ?? Role::where('name', 'user')->value('id')
            ]);

            $user->assignRole('user'); // default role

            // Create access token
            $accessToken = $user->createToken('auth_token')->plainTextToken;

            // Generate refresh token
            $refreshToken = Str::random(64);

            // Save in user_tokens table
            UserToken::create([
                'user_id' => $user->id,
                'access_token' => $accessToken,
                'refresh_token' => $refreshToken,
                'refresh_token_expires_at' => now()->addDays(30),
                'device_name' => $request->header('User-Agent'),
                'ip_address' => $request->ip(),
                'last_used_at' => now()
            ]);

            DB::commit();

            return response()->json([
                'status' => true,
                'message' => 'Registration successful',
                'data' => [
                    'user' => $user,
                    'access_token' => $accessToken,
                    'refresh_token' => $refreshToken,
                    'token_type' => 'Bearer',
                    'role' => $user->role->name
                ]
            ], 201);

        } catch (Throwable $e) {
            DB::rollBack();
            return response()->json([
                'status' => false,
                'message' => 'Registration failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // ---------------- Login ----------------
    public function login(Request $request)
    {
        $request->validate([
            'mobile_no' => 'required|string',
            'password' => 'required|string'
        ]);

        try {
            $user = User::where('mobile_no', $request->mobile_no)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json(['status' => false, 'message' => 'Invalid credentials'], 401);
            }

            // Create access token
            $accessToken = $user->createToken('auth_token')->plainTextToken;

            // Generate refresh token
            $refreshToken = Str::random(64);

            // Save token in user_tokens
            UserToken::create([
                'user_id' => $user->id,
                'access_token' => $accessToken,
                'refresh_token' => $refreshToken,
                'refresh_token_expires_at' => now()->addDays(30),
                'device_name' => $request->header('User-Agent'),
                'ip_address' => $request->ip(),
                'last_used_at' => now()
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Login successful',
                'data' => [
                    'user' => $user,
                    'access_token' => $accessToken,
                    'refresh_token' => $refreshToken,
                    'token_type' => 'Bearer',
                    'role' => $user->role->name
                ]
            ], 200);

        } catch (Throwable $e) {
            return response()->json([
                'status' => false,
                'message' => 'Login failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // ---------------- Refresh Token ----------------
    public function refreshToken(Request $request)
    {
        $request->validate([
            'refresh_token' => 'required|string'
        ]);

        DB::beginTransaction();
        try {
            $tokenRecord = UserToken::where('refresh_token', $request->refresh_token)
                ->where('refresh_token_expires_at', '>', now())
                ->first();

            if (!$tokenRecord) {
                return response()->json(['status' => false, 'message' => 'Invalid or expired refresh token'], 401);
            }

            $user = $tokenRecord->user;

            // Delete old access token
            $user->currentAccessToken()?->delete();

            // Create new access token
            $accessToken = $user->createToken('auth_token')->plainTextToken;

            // Update token record
            $tokenRecord->update([
                'access_token' => $accessToken,
                'last_used_at' => now()
            ]);

            DB::commit();

            return response()->json([
                'status' => true,
                'message' => 'Access token refreshed',
                'data' => [
                    'access_token' => $accessToken,
                    'token_type' => 'Bearer',
                    'user' => $user,
                    'role' => $user->getRoleNames()
                ]
            ], 200);

        } catch (Throwable $e) {
            DB::rollBack();
            return response()->json([
                'status' => false,
                'message' => 'Refresh token failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // ---------------- Logout ----------------
    public function logout(Request $request)
    {
        try {
            $token = $request->bearerToken();

            if (!$token) {
                return response()->json([
                    'status' => false,
                    'code' => 401,
                    'message' => 'No token provided !'
                ], 401);
            }

            $accessToken = PersonalAccessToken::findToken($token);

            if (!$accessToken) {
                return response()->json([
                    'status' => false,
                    'code' => 401,
                    'message' => 'Invalid token or user not authenticated !'
                ], 401);
            }

            $user = $accessToken->tokenable;

            // Delete from user_tokens table
            UserToken::where('user_id', $user->id)
                ->where('access_token', $token)
                ->delete();

            // Delete sanctum token
            $accessToken->delete();

            return response()->json([
                'status' => true,
                'code' => 200,
                'message' => 'User logged out successfully !'
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'status' => false,
                'code' => 500,
                'message' => 'Something went wrong !',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
