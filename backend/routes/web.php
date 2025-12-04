<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Translation routes (with SetLocale middleware)
Route::middleware(['web', App\Http\Middleware\SetLocale::class])->group(function () {
    Route::get('/translations', [App\Http\Controllers\Api\TranslationController::class, 'index']);
    Route::get('/translations/{key}', [App\Http\Controllers\Api\TranslationController::class, 'show'])->where('key', '.*');
});



Route::middleware(['web', App\Http\Middleware\SetLocale::class])->get('/', function () {
    return view('welcome');
});
