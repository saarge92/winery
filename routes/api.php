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

Route::get('/types', ['uses' => 'MobileController@getAllTypes']);
Route::get('/sweets', ['uses' => 'MobileController@getAllSweets']);
Route::get('/producers', ['uses' => 'MobileController@getAllProducers']);
Route::get('/countries', ['uses' => 'MobileController@getAllCountries']);
Route::get('/colors', ['uses' => 'MobileController@getAllColors']);
Route::get('/price/min', ['uses' => 'MobileController@getMinPrice']);
Route::get('/price/max', ['uses' => 'MobileController@getMaxPrice']);
Route::post('/wines', ['uses' => 'MobileController@getRequestedWines']);
Route::get('/wines/{id}', ['uses' => 'MobileController@getWineById']);
