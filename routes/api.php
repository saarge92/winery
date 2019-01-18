<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/get-all-types', ['uses' => 'MobileController@getAllTypes']);
Route::get('/get-all-sweets', ['uses' => 'MobileController@getAllSweets']);
Route::get('/get-all-producers', ['uses' => 'MobileController@getAllProducers']);
Route::get('/get-all-countries', ['uses' => 'MobileController@getAllCountries']);
Route::get('/get-all-colors', ['uses' => 'MobileController@getAllColors']);
Route::get('/get-min-price', ['uses' => 'MobileController@getMinPrice']);
Route::get('/get-max-price', ['uses' => 'MobileController@getMaxPrice']);