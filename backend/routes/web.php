<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
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

Route::get('/', function () {
    return view('welcome');
});

// ADMIN DASHBOARD
Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::prefix('admin')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');


        // CATEGORY
        Route::prefix('categories')->group(function () {
            Route::get('/', [CategoryController::class, 'index'])->name('categories.index');
            Route::post('/', [CategoryController::class, 'store'])->name('categories.store');
            Route::put('{category}', [CategoryController::class, 'update'])->name('categories.update');
            Route::delete('{category}', [CategoryController::class, 'destroy'])->name('categories.destroy');
        });

    });
});


require __DIR__.'/auth.php';
