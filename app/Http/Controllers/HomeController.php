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
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Session;
class HomeController extends Controller
{
	use vineTrait;
	use paginateTrait;
	public function index(Request $request)
	{
		$sliders = slider::where(['is_active'=>true])->get();
		$countries = country::all();
		$sweets = sweet::all();
		$colors = color::all();
		//Get Filtered Wines
		$vines = $this->filterVines($request->all());
		//Get per page number
		$paginate_number = $this->getPaginateNumber($request);
		//Generate array for review
		if($paginate_number == 0)
		{
			$vines = $vines->where(['is_active'=>true]);
			$vines_for_review = $this->generateListVines($vines->get());
		}
		else{
			$vines = $vines->where(['is_active'=>true])->paginate($paginate_number);
			$vines_for_review = $this->generateListVines($vines);
		}
		$max_price = vine::max('price');
		$min_price = vine::min('price');
		$types_for_wines = type_of_wine::all();
		$paginators = DisplayPaginator::all();
		return view('frontend.index', ['sliders' => $sliders,
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
		$sliders = slider::where(['is_active'=>true])->get();
		$countries = country::all();
		$sweets = sweet::all();
		$colors = color::all();
		$max_price = vine::max('price');
		$min_price = vine::min('price');
		$types_for_wines = type_of_wine::all();
		$vine = vine::where('id', $id)->get();
		if (count($vine) > 0) {
			$vine_for_review = collect($this->generateListVines($vine))[0];
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
		return null;
	}
	public function search(Request $request)
	{
		$sliders = slider::where(['is_active'=>true])->get();
		$countries = country::all();
		$sweets = sweet::all();
		$colors = color::all();
		$max_price = vine::max('price');
		$min_price = vine::min('price');
		$types_for_wines = type_of_wine::all();
		$paginators = DisplayPaginator::all();
		$paginate_number = $this->getPaginateNumber($request);
		$vines = $this->searchSomeWines($request)->paginate($paginate_number);
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
