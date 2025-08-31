<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {
    Route::post('/register', [AuthController::class, 'register']); // default user register
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/refresh', [AuthController::class, 'refreshToken']);
    /*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/
    Route::middleware('auth:sanctum')->group(function () {

        Route::get('/profile', fn(Request $request) => $request->user()->load('roles'));

        // Public category routes
        Route::get('categories', [CategoryController::class, 'index']);
        /*
    |--------------------------------------------------------------------------
    | User Routes
    |--------------------------------------------------------------------------
    */
        Route::middleware('role:user')->group(function () {
            Route::get('/dashboard', fn() => response()->json(['msg' => 'User Dashboard']));
        });

        /*
    |--------------------------------------------------------------------------
    | Admin Routes
    |--------------------------------------------------------------------------
    */
        Route::middleware('role:admin')->group(function () {
            Route::get('/dashboard', fn() => response()->json(['msg' => 'Admin Dashboard']));

            // Category Routes
            Route::prefix('categories')->group(function () {
                Route::post('store', [CategoryController::class, 'store']);
                Route::put('update/{id}', [CategoryController::class, 'update']);
                Route::get('show/{id}', [CategoryController::class, 'show']);
                Route::delete('destroy/{id}', [CategoryController::class, 'destroy']);
                Route::post('{id}/restore', [CategoryController::class, 'restore']);
                Route::delete('{id}/force', [CategoryController::class, 'forceDelete']);
            });
        });

        /*
    |--------------------------------------------------------------------------
    | Deliveryman Routes
    |--------------------------------------------------------------------------
    */
        Route::middleware('role:deliveryman')->group(function () {
            Route::get('/dashboard', fn() => response()->json(['msg' => 'Deliveryman Dashboard']));
        });
    });


    // Common for all logged-in users
    Route::post('/logout', [AuthController::class, 'logout']);
});
