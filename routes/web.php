<?php

use App\Http\Controllers\HomeController\About as AboutController;
use App\Http\Controllers\HomeController\Booking as BookingController;
use App\Http\Controllers\HomeController\Contact as ContactController;
use App\Http\Controllers\HomeController\Order as OrderController;
use App\Http\Controllers\HomeController\Index as HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class, 'index'])->name('home.index');
Route::get('/about', [AboutController::class, 'index'])->name('about.index');
Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
Route::get('/order', [OrderController::class, 'index'])->name('order.index');
Route::get('/order/booking/{schedule}', [BookingController::class, 'index'])->name('booking.index');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';