<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
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
            'password' => 'required|string|min:6|confirmed'
        ]);

        DB::beginTransaction();
        try {
            $user = User::create([
                'name' => $request->name,
                'mobile_no' => $request->mobile_no,
                'password' => Hash::make($request->password)
            ]);

            $user->assignRole('user'); // default role

            // Auto-login: create access token
            $accessToken = $user->createToken('auth_token')->plainTextToken;

            // Generate refresh token
            $refreshToken = Str::random(64);
            $user->update([
                'refresh_token' => $refreshToken,
                'refresh_token_expires_at' => now()->addDays(30)
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
                    'role' => $user->getRoleNames()
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
            $user->update([
                'access_token' => $accessToken,
                'refresh_token' => $refreshToken,
                'refresh_token_expires_at' => now()->addDays(30)
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Login successful',
                'data' => [
                    'user' => $user,
                    'access_token' => $accessToken,
                    'refresh_token' => $refreshToken,
                    'token_type' => 'Bearer',
                    'role' => $user->getRoleNames()
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
            $user = User::where('refresh_token', $request->refresh_token)
                        ->where('refresh_token_expires_at', '>', now())
                        ->first();

            if (!$user) {
                return response()->json(['status' => false, 'message' => 'Invalid or expired refresh token'], 401);
            }

            // Delete current access token
            $user->currentAccessToken()?->delete();

            // Create new access token
            $accessToken = $user->createToken('auth_token')->plainTextToken;

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
            // Extract token from the Authorization header
            $token = $request->bearerToken();

            // Handle null pointer reference
            if (!$token) {
                return response()->json([
                    'status' => false,
                    'code' => 401,
                    'message' => 'No token provided !'
                ], 401);
            }

            // Find the token
            $accessToken = PersonalAccessToken::findToken($token);

                        // Delete refresh token
            $user = $accessToken->tokenable;
            $user->update([
                'access_token' => null,
                'refresh_token' => null,
                'refresh_token_expires_at' => null
            ]);

            // Handle token not found
            if (!$accessToken) {
                // Return an error response
                return response()->json([
                    'status' => false,
                    'code' => 401,
                    'message' => 'Invalid token or user not authenticated !'
                ], 401);
            }

            // Revoke the token by deleting it
            $accessToken->delete();

            // Return a success response
            return response()->json([
                'status' => true,
                'code' => 200,
                'message' => 'User logged out successfully !'
            ], 200);
        } catch (Exception $e) {
            // Handle any exceptions
            return response()->json([
                'status' => false,
                'code' => 500,
                'message' => 'Something went wrong !',
                'error' => $e->getMessage()
            ], 500);
        }
    }

}
