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

Route::get('/getAllTypes', ['uses' => 'MobileController@getAllTypes']);
Route::get('/getAllSweets', ['uses' => 'MobileController@getAllSweets']);
Route::get('/getAllProducers', ['uses' => 'MobileController@getAllProducers']);
Route::get('/getAllCountries', ['uses' => 'MobileController@getAllCountries']);
Route::get('/getAllColors', ['uses' => 'MobileController@getAllColors']);
Route::get('/getMinPrice', ['uses' => 'MobileController@getMinPrice']);
Route::get('/getMaxPrice', ['uses' => 'MobileController@getMaxPrice']);