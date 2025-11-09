<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PriceController;
use App\Http\Controllers\Api\StateController;
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
        Route::get('prices', [PriceController::class, 'index']);
        // Countries
        Route::prefix('countries')->group(function () {
            Route::get('/', [CountryController::class, 'index']); // List all countries, with filters
            Route::get('{id}', [CountryController::class, 'show']); // Get country by ID with states & cities
        });

        // States
        Route::prefix('states')->group(function () {
            Route::get('/', [StateController::class, 'index']); // List all states, filterable by country_id, name, iso2
            Route::get('{id}', [StateController::class, 'show']); // Get state by ID with cities
        });

        // Cities
        Route::prefix('cities')->group(function () {
            Route::get('/', [CityController::class, 'index']); // List all cities, filterable by country_id, state_id, name
            Route::get('{id}', [CityController::class, 'show']); // Get city by ID with state & country
        });

        Route::prefix('orders')->group(function () {
            Route::get('/', [OrderController::class, 'index']);
            Route::post('/', [OrderController::class, 'store']);
            Route::get('{id}', [OrderController::class, 'show']);
            Route::put('{id}', [OrderController::class, 'update']);
            Route::delete('{id}', [OrderController::class, 'destroy']);
            Route::post('{id}/restore', [OrderController::class, 'restore']);
            Route::post('{id}/status', [OrderController::class, 'updateStatus']);
        });
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
                Route::post('update', [CategoryController::class, 'update']);
                Route::get('show/{id}', [CategoryController::class, 'show']);
                Route::delete('destroy/{id}', [CategoryController::class, 'destroy']);
                Route::post('{id}/restore', [CategoryController::class, 'restore']);
                Route::delete('{id}/force', [CategoryController::class, 'forceDelete']);
            });

            Route::prefix('prices')->group(function () {
                Route::get('{id}', [PriceController::class, 'show']);
                Route::post('/', [PriceController::class, 'store']);
                Route::put('{id}', [PriceController::class, 'update']);
                Route::delete('{id}', [PriceController::class, 'destroy']);
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
