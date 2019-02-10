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

/**
 * Контроллер для работы с личным кабинетом администратора
 * 
 * Предоставляет методы для генерации представлений личного кабинета админа
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
class AdminController extends Controller
{
	use vineTrait;
	use adminVineTrait;

	public function __construct()
	{
		$this->middleware('roles');
	}
	/**
	 * Генерация индексной страницы администратора
	 * 
	 * @param Request $request - параметр-запрос
	 */
	public function index(Request $request)
	{
		$countries = country::all();
		$sweets = sweet::all();
		$colors = color::all();

		/** Отфильтрованные вина */
		$vines = $this->filterVines($request->all());
		$vines = $vines->orderby('price', 'desc')->paginate(12);
		$max_price = vine::max('price');
		$min_price = vine::min('price');
		$types_for_wines = type_of_wine::all();
		/**Генерация списка вин для отображения */
		$vines_for_review = $this->generateListVines($vines);
		return view(
			'admin.index',
			[
				'vines' => $vines,
				'countries' => $countries,
				'vines_for_review' => collect($vines_for_review),
				'colors' => $colors,
				'sweets' => $sweets,
				'max_price' => $max_price,
				'min_price' => $min_price,
				'type_of_wines' => $types_for_wines
			]
		);
	}

	/**
	 * Поиск вин в админ-панеле
	 * 
	 * Применяются функции из трейтов vineTrait и adminVineTrait
	 */
	public function searchAdminWines(Request $request)
	{
		$vines = $this->searchSomeWines($request)->orderby('price', 'desc');
		$vines_for_review = collect($this->generateListVines($vines->get()));
		return view('admin.searchResult', ['vines_for_review' => $vines_for_review, 'vines' => $vines->paginate(12)]);
	}

	/**
	 * GET запрос на создание вина
	 * 
	 * Генерирует страницу для начала создания вина
	 */
	public function createVine()
	{
		$countries = country::all();
		$colors = color::all();
		$producers = producer::all();
		$sweets = sweet::all();
		$types_for_wines = type_of_wine::all();
		return view('admin.createVine', [
			'countries' => $countries,
			'colors' => $colors,
			'producers' => $producers,
			'sweets' => $sweets,
			'types_for_wines' => $types_for_wines
		]);
	}

	/**
	 * POST запрос на создание вина
	 * 
	 * Обработка запроса на создание вина
	 * 
	 * @param VinePostRequest $request - форма для создание вина
	 */
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

	/**
	 * GET запрос на редактирование вина
	 * 
	 * @param Request $request - параметры запроса
	 * @param int $id - номер редактируемого вина
	 */
	public function editVine(Request $request, int $id)
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

	/**
	 * POST-запрос на редактирование вина
	 * 
	 * Перенаправляет на предыдущую страницу, в случае успешного редактирования
	 * 
	 * @param VinePostRequest $request - запрос с параметрами редактирования
	 */
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

	/**
	 * POST-запрос на редактирование вина
	 * 
	 * Перенаправляет на предыдущую страницу, в случае успешного удаления
	 * 
	 * @param Request $request - запрос с параметрами удаления
	 * @param int $id - id удаляемого вина
	 */
	public function deleteVine(Request $request, int $id)
	{
		$result = $this->dropVine($id);
		$result == true ? Session::flash('success', 'Вино удалено') : Session::flash('error', 'Произошла ошибка при удалении');
		return redirect('admin-panel');
	}

	/**
	 * POST-запрос на деактивацию вина вина
	 * 
	 * Перенаправляет на предыдущую страницу, в случае успешной деактивации
	 * 
	 * @param Request $request - запрос с параметрами деактивации
	 * @param int $id - id деактивируемого вина
	 */
	public function deactivateVine(Request $request, $id)
	{
		$result = $this->disableVine($id);
		$result == true ? Session::flash('success', 'Вино деактивировано') : Session::flash('error', 'Ошибка. Возможно вино отсутсвует в базе');
		return redirect()->back();
	}

	/**
	 * POST-запрос на деактивацию вина вина
	 * 
	 * Перенаправляет на предыдущую страницу, в случае успешной деактивации
	 * 
	 * @param Request $request - запрос с параметрами деактивации
	 * @param int $id - id деактивируемого вина
	 */
	public function activateVine(Request $request, $id)
	{
		$result = $this->enableVine($id);
		$result == true ? Session::flash('success', 'Вино деактивировано') : Session::flash('error', 'Ошибка. Возможно вино отсутсвует в базе');
		return redirect()->back();
	}
}
