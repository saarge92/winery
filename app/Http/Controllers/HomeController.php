<?php

namespace App\Http\Controllers;

use App\color;
use App\country;
use App\slider;
use App\sweet;
use App\Traits\vineTrait;
use App\Traits\paginateTrait;
use App\vine;
use App\type_of_wine;
use App\DisplayPaginator;
use Illuminate\Http\Request;

/**
 * Контроллер для работы главной (frontend) страницы
 * 
 * Предоставляет методы для работы с клиентской частью
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
class HomeController extends Controller
{
	use vineTrait;
	use paginateTrait;

	/**
	 * Генерация главной индексной страницы
	 * 
	 * @param Request $request Get-запрос
	 */
	public function index(Request $request)
	{
		$sliders = slider::where(['is_active' => true])->get();
		$countries = country::all();
		$sweets = sweet::all();
		$colors = color::all();
		//Get Filtered Wines
		$vines = $this->filterVines($request->all());
		//Get per page number
		$paginate_number = $this->getPaginateNumber($request);
		//Generate array for review
		if ($paginate_number == 0) {
			$vines = $vines->where(['is_active' => true])->orderby('price', 'desc');
			$vines_for_review = $this->generateListVines($vines->get());
		} else {
			$vines = $vines->where(['is_active' => true])->orderby('price', 'desc')->paginate($paginate_number);
			$vines_for_review = $this->generateListVines($vines);
		}
		$max_price = vine::max('price');
		$min_price = vine::min('price');
		$types_for_wines = type_of_wine::all();
		$paginators = DisplayPaginator::all();
		return view('frontend.index', [
			'sliders' => $sliders,
			'vines' => $vines,
			'countries' => $countries,
			'vines_for_review' => collect($vines_for_review),
			'colors' => $colors,
			'sweets' => $sweets,
			'max_price' => $max_price,
			'min_price' => $min_price,
			'type_of_wines' => $types_for_wines,
			'paginate_number' => $paginate_number,
			'paginators' => $paginators
		]);
	}

	/**
	 * Получение количества вин при выборе на клиентской части
	 * 
	 * @param Request $request POST-запрос
	 */
	public function getCountOfChoice(Request $request)
	{
		parse_str($request->get('params'), $filter_array);
		$count_vines = count($this->filterVines($filter_array)->where('is_active', true)->get());
		return response()->json(['all' => $count_vines]);
	}

	/**
	 * Автозаполнение поля ввода поиска
	 * 
	 * @param Request $request POST-запрос
	 * @return JsonResponse Json-ответ со списком вин
	 */
	public function autocomplete(Request $request)
	{
		$name = $request->get('wine_name');
		$some_wines = vine::where('is_active', true)->where('name_rus', 'LIKE', '%' . $name . '%')
			->orWhere('name_en', 'LIKE', '%' . $name . '%')->get();
		return response()->json(['wines' => $some_wines]);
	}

	/**
	 * Получение вина по id
	 * 
	 * @param Request $request Get-запрос
	 * @param $id Номер вина
	 */
	public function getWine(Request $request, $id)
	{
		$sliders = slider::where(['is_active' => true])->get();
		$countries = country::all();
		$sweets = sweet::all();
		$colors = color::all();
		$max_price = vine::max('price');
		$min_price = vine::min('price');
		$types_for_wines = type_of_wine::all();
		$vine = vine::where(['id' => $id, 'is_active' => true])->get();
		$vine_for_review = count($vine) != 0 ? collect($this->generateListVines($vine))[0] : null;
		return view('frontend.viewWine', [
			'vine' => $vine_for_review,
			'sliders' => $sliders,
			'countries' => $countries,
			'sweets' => $sweets,
			'colors' => $colors,
			'max_price' => $max_price,
			'min_price' => $min_price,
			'type_of_wines' => $types_for_wines
		]);
	}

	/**
	 * Поиск вина
	 * 
	 * @param Request $request POST-запрос
	 */
	public function search(Request $request)
	{
		$sliders = slider::where(['is_active' => true])->get();
		$countries = country::all();
		$sweets = sweet::all();
		$colors = color::all();
		$max_price = vine::max('price');
		$min_price = vine::min('price');
		$types_for_wines = type_of_wine::all();
		$paginators = DisplayPaginator::all();
		$paginate_number = $this->getPaginateNumber($request);
		$vines = $this->searchSomeWines($request)->orderby('price', 'desc')->paginate($paginate_number);
		$vines_for_review = collect($this->generateListVines($vines));
		return view('frontend.searchResult', [
			'vines_for_review' => $vines_for_review,
			'vines' => $vines,
			'sliders' => $sliders,
			'countries' => $countries,
			'sweets' => $sweets,
			'colors' => $colors,
			'max_price' => $max_price,
			'min_price' => $min_price,
			'type_of_wines' => $types_for_wines,
			'paginators' => $paginators,
			'paginate_number' => $paginate_number,
		]);
	}
}
