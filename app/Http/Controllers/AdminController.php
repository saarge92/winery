<?php

namespace App\Http\Controllers;

use App\color;
use App\country;
use App\Http\Requests\VinePostRequest;
use App\producer;
use App\sweet;
use App\Traits\adminVineTrait;
use App\Traits\vineTrait;
use App\vine;
use App\type_of_wine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class AdminController extends Controller
{
	use vineTrait;
	use adminVineTrait;

	public function __construct()
	{
		$this->middleware('roles');
	}
	public function index(Request $request)
	{
		$countries = country::all();
		$sweets = sweet::all();
		$colors = color::all();

		//Get Filtered Wines
		$vines = $this->filterVines($request->all());
		$vines = $vines->orderby('price','desc')->paginate(12);
		$max_price = vine::max('price');
		$min_price = vine::min('price');
		$types_for_wines = type_of_wine::all();
		//Generate array for review
		$vines_for_review = $this->generateListVines($vines);
		return view('admin.index',
		[
			'vines' => $vines,
			'countries' => $countries,
			'vines_for_review' => collect($vines_for_review),
			'colors' => $colors,
			'sweets' => $sweets,
			'max_price' => $max_price,
			'min_price' => $min_price,
			'type_of_wines' => $types_for_wines
		]);
	}
	public function searchAdminWines(Request $request)
	{
		$vines = $this->searchSomeWines($request)->orderby('price','desc');
		$vines_for_review = collect($this->generateListVines($vines->get()));
		return view('admin.searchResult', ['vines_for_review' => $vines_for_review, 'vines' => $vines->paginate(12)]);
	}
	public function createVine()
	{
		$countries = country::all();
		$colors = color::all();
		$producers = producer::all();
		$sweets = sweet::all();
		$types_for_wines = type_of_wine::all();
		return view('admin.createVine', ['countries' => $countries,
			'colors' => $colors,
			'producers' => $producers,
			'sweets' => $sweets,
			'types_for_wines' => $types_for_wines
		]);
	}

	public function postVine(VinePostRequest $request)
	{
		if ($request->validated()) {
			$result = $this->addVine($request);
			$result == true ? Session::flash('success', 'Вино успешно добавлено') :
			Session::flash('error', 'Произошла ошибка. Обратитесь к разработчику сайта');
			return redirect('admin-panel');
		}
		return redirect()->back();
	}

	public function editVine(Request $request, $id)
	{
		$countries = country::all();
		$colors = color::all();
		$producers = producer::all();
		$sweets = sweet::all();
		$vine = vine::find($id);
		$types_for_wines = type_of_wine::all();
		return view('admin.editVine', [
			'vine' => $vine,
			'countries' => $countries,
			'colors' => $colors,
			'producers' => $producers,
			'sweets' => $sweets,
			'types_for_wines' => $types_for_wines
		]);
	}

	public function postEditVine(VinePostRequest $request)
	{
		if ($request->validated()) {
			$result = $this->updateVine($request);
			$result == true ? Session::flash('success', 'Вино успешно обновлено')
			: Session::flash('error', 'Произошла ошибка, обратитесь к разработчику сайта!');
			return redirect('admin-panel');
		}
		return redirect()->back();
	}

	public function deleteVine(Request $request, $id)
	{
		$result = $this->dropVine($id);
		$result == true ? Session::flash('success', 'Вино удалено') : Session::flash('error', 'Произошла ошибка при удалении');
		return redirect('admin-panel');
	}
	public function deactivateVine(Request $request, $id)
	{
		$result = $this->disableVine($id);
		$result == true ? Session::flash('success', 'Вино деактивировано') : Session::flash('error', 'Ошибка. Возможно вино отсутсвует в базе');
		return redirect()->back();
	}
	public function activateVine(Request $request, $id)
	{
		$result = $this->enableVine($id);
		$result == true ? Session::flash('success', 'Вино деактивировано') : Session::flash('error', 'Ошибка. Возможно вино отсутсвует в базе');
		return redirect()->back();
	}
}
