<?php

Route::get('/', [
	'uses' => 'HomeController@index',
	'as' => 'home',
]);

Route::group(['middleware' => 'roles'], function () {
	Route::get('admin-panel', [
		'uses' => 'AdminController@index',
		'as' => 'admin',
	]);
	Route::get('all_types',[
		'uses' => 'TypeWineController@index',
		'as' => 'all_types'
	]);
	Route::get('startCreateTypeWine',[
		'uses' => 'TypeWineController@getCreate',
		'as' => 'startCreateTypeWine'
	]);
	Route::post('createTypeWine',[
		'uses' => 'TypeWineController@createTypeWine',
		'as' => 'createTypeWine'
	]);
	Route::get('getEditType/{id}',[
		'uses' => 'TypeWineController@getEditType',
		'as' => 'getEditType'
	]);
	Route::post('editType/{id}',[
		'uses' => 'TypeWineController@editType',
		'as' => 'editType'
	]);
	Route::post('dropType/{id}',[
		'uses' => 'TypeWineController@dropType',
		'as' => 'dropType'
	]);
	Route::get('createVine', [
		'uses' => 'AdminController@createVine',
		'as' => 'createVine',
	]);
	Route::post('postVine', [
		'uses' => 'AdminController@postVine',
		'as' => 'postVine',
	]);
	Route::get('editVine/{id}', [
		'uses' => 'AdminController@editVine',
		'as' => 'editVine',
	]);
	Route::post('postEditVine', [
		'uses' => 'AdminController@postEditVine',
		'as' => 'postEditVine',
	]);
	Route::post('deleteVine/{id}', [
		'uses' => 'AdminController@deleteVine',
		'as' => 'deleteVine',
	]);
	Route::post('deactivateVine/{id}', [
		'uses' => 'AdminController@deactivateVine',
		'as' => 'deactivateVine',
	]);
	Route::post('activateVine/{id}', [
		'uses' => 'AdminController@activateVine',
		'as' => 'activateVine',
	]);
	Route::get('/countries', [
		'uses' => 'CountryController@getCountries',
		'as' => 'all_countries',
	]);
	Route::get('createCountry', [
		'uses' => 'CountryController@startCreateCountry',
		'as' => 'startCreateCountry',
	]);
	Route::post('postCountry', [
		'uses' => 'CountryController@createCountry',
		'as' => 'postCountry',
	]);
	Route::get('startEditCountry/{id}', [
		'uses' => 'CountryController@startEdit',
		'as' => 'startEditCountry',
	]);
	Route::post('editCountry/{id}', [
		'uses' => 'CountryController@editCountry',
		'as' => 'editCountry',
	]);
	Route::post('dropCountry/{id}', [
		'uses' => 'CountryController@dropCountry',
		'as' => 'dropCountry',
	]);
	Route::get('producers', [
		'uses' => 'ProducerController@getProducers',
		'as' => 'producers',
	]);
	Route::get('startCreateProducer', [
		'uses' => 'ProducerController@startCreateProducer',
		'as' => 'startCreateProducer',
	]);
	Route::post('createProducer', [
		'uses' => 'ProducerController@createProducer',
		'as' => 'createProducer',
	]);
	Route::get('editProducer/{id}', [
		'uses' => 'ProducerController@startEdit',
		'as' => 'editProducer',
	]);
	Route::post('postEditProducer/{id}', [
		'uses' => 'ProducerController@editProducer',
		'as' => 'postEditProducer',
	]);
	Route::post('dropProducer/{id}', [
		'uses' => 'ProducerController@dropProducer',
		'as' => 'dropProducer',
	]);
	Route::get('allSliders', [
		'uses' => 'SliderController@allSliders',
		'as' => 'allSliders',
	]);
	Route::get('startCreateSlider', [
		'uses' => 'SliderController@startCreateSlider',
		'as' => 'startCreateSlider',
	]);
	Route::post('postCreateSlider', [
		'uses' => 'SliderController@postCreateSlider',
		'as' => 'postCreateSlider',
	]);
	Route::get('getEditSlider/{id}', [
		'uses' => 'SliderController@getEditSlider',
		'as' => 'getEditSlider',
	]);
	Route::post('postEditSlider/{id}', [
		'uses' => 'SliderController@postEditSlider',
		'as' => 'postEditSlider',
	]);
	Route::post('dropSlider/{id}', [
		'uses' => 'SliderController@dropSlider',
		'as' => 'dropSlider',
	]);
	Route::get('allColors', [
		'uses' => 'ColorController@allColors',
		'as' => 'allColors',
	]);
	Route::get('startEditColor/{id}', [
		'uses' => 'ColorController@startEditColor',
		'as' => 'startEditColor',
	]);
	Route::get('startCreateColor/', [
		'uses' => 'ColorController@startCreateColor',
		'as' => 'startCreateColor',
	]);
	Route::post('createColor/', [
		'uses' => 'ColorController@createColor',
		'as' => 'createColor',
	]);
	Route::post('editColor/{id}', [
		'uses' => 'ColorController@editColor',
		'as' => 'editColor',
	]);
	Route::post('dropColor/{id}', [
		'uses' => 'ColorController@dropColor',
		'as' => 'dropColor',
	]);
	Route::get('allSweets', [
		'uses' => 'SweetController@allSweets',
		'as' => 'allSweets',
	]);
	Route::get('startCreateSweet/', [
		'uses' => 'SweetController@startCreateSweet',
		'as' => 'startCreateSweet',
	]);
	Route::post('createSweet/', [
		'uses' => 'SweetController@createSweet',
		'as' => 'createSweet',
	]);
	Route::get('startEditSweet/{id}', [
		'uses' => 'SweetController@startEditSweet',
		'as' => 'startEditSweet',
	]);
	Route::post('editSweet/{id}', [
		'uses' => 'SweetController@editSweet',
		'as' => 'editSweet',
	]);
	Route::post('dropSweet/{id}', [
		'uses' => 'SweetController@dropSweet',
		'as' => 'dropSweet',
	]);
	Route::get('searchAdminWines',[
		'uses' => 'AdminController@searchAdminWines',
		'as' => 'searchAdminWines'
	]);
});

Route::post('getCountOfChoice', [
	'uses' => 'HomeController@getCountOfChoice',
	'as' => 'getCountOfChoice',
]);
Route::get('/autocomplete', [
	'uses' => 'HomeController@autocomplete',
	'as' => 'autocomplete',
]);
Route::get('/viewWine/{id}', [
	'uses' => 'HomeController@getWine',
	'as' => 'viewWine',
]);
Route::get('searchWine', [
	'uses' => 'HomeController@search',
	'as' => 'search',
]);

Auth::routes();
