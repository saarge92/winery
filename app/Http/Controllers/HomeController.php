<?php

namespace App\Http\Controllers;

use App\color;
use App\country;
use App\slider;
use App\sweet;
use App\Traits\vineTrait;
use App\vine;
use App\type_of_wine;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HomeController extends Controller
{
	use vineTrait;
	public function index(Request $request)
	{
		$sliders = slider::all();
		$countries = country::all();
		$sweets = sweet::all();
		$colors = color::all();
		$year_distincts = vine::distinct('year')->get();

		//Get Filtered Wines
		$vines = $this->filterVines($request->all());
		$vines = $vines->paginate(4);
		$max_price = vine::max('price');
		$min_price = vine::min('price');
		$types_for_wines = type_of_wine::all();
		//Generate array for review
		$vines_for_review = $this->generateListVines($vines);
		return view('frontend.index', ['sliders' => $sliders,
			'vines' => $vines,
			'countries' => $countries,
			'vines_for_review' => collect($vines_for_review),
			'colors' => $colors,
			'sweets' => $sweets,
			'params' => $request->all(),
			'max_price' => $max_price,
			'min_price' => $min_price,
			'type_of_wines' => $types_for_wines
		]);
	}
	public function getCountOfChoice(Request $request)
	{
		parse_str($request->get('params'), $filter_array);
		$count_vines = count($this->filterVines($filter_array)->get());
		return response()->json(['all' => $count_vines]);
	}
	public function autocomplete(Request $request)
	{
		$name = $request->get('wine_name');
		$some_wines = vine::where('name_rus', 'LIKE', '%' . $name . '%')
			->orWhere('name_en', 'LIKE', '%' . $name . '%')->get();
		return response()->json(['wines' => $some_wines]);
	}
	public function getWine(Request $request, $id)
	{
		$vine = vine::where('id', $id)->get();
		if (count($vine) > 0) {
			$vine = $this->generateListVines($vine)[0];
			return view('frontend.viewWine', ['vine' => $vine]);
		}
		return null;
	}
	public function search(Request $request)
	{
		$vines = $this->searchSomeWines($request);
		$vines_for_review = collect($this->generateListVines($vines));
		return view('frontend.searchResult', ['vines_for_review' => $vines_for_review, 'vines' => $vines]);
	}
}
