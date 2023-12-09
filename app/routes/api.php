<?php

use App\Http\Controllers\Auth\AuthenticationController;
use App\Http\Controllers\LookupController;
use App\Http\Controllers\SoldierController;
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

Route::middleware('auth:sanctum')->post('/verify_token', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthenticationController::class, 'login']);
Route::post('/register', [AuthenticationController::class, 'register']);
Route::get('/logout', [AuthenticationController::class, 'logout']);

Route::middleware('auth:sanctum')->controller(AuthenticationController::class)->group(function () {
    Route::get('/user', 'user');
});

Route::middleware('auth:sanctum')->controller(LookupController::class)->prefix('lookup')->group(function () {
    Route::get('/get-create-drop-down-data', 'getCreateDropDownData');
    Route::get('/get-district-by-province-id/{id}', 'getDistrictByProvinceId');
});

Route::middleware('auth:sanctum')->controller(SoldierController::class)->prefix('employee')->group(function () {
    Route::get('/list', 'index');
    Route::post('/store_employee', 'store');
    Route::post('/update_employee', 'update')->name('update.employee');
    Route::get('/edit_employee/{id}', 'edit')->name('edit.employee');
});
