<?php

namespace App\Http\Controllers;

use App\color;
use App\country;
use App\Http\Requests\VinePostRequest;
use App\producer;
use App\sweet;
use App\vine;
use App\type_of_wine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Interfaces\IServices\IWineService;
use App\Traits\adminTrait;

/**
 * Контроллер для работы с личным кабинетом администратора
 * 
 * Предоставляет методы для генерации представлений личного кабинета админа
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class AdminController extends Controller
{
	use adminTrait;

	private $wineService;

	public function __construct(IWineService $wineService)
	{
		$this->wineService = $wineService;
	}
	/**
	 * Генерация индексной страницы администратора
	 * 
	 * @param Request $request - параметр-запрос
	 */
	public function index(Request $request)
	{
		$dataForAdminPage = $this->getDataForAdminPage();
		/** Отфильтрованные вина */
		$vines = $this->wineService->filterWines($request->all());
		$vines = $vines->orderby('price', 'desc')->paginate(12);
		/**Генерация списка вин для отображения */
		$vines_for_review = $this->wineService->generateListVines($vines);
		return view(
			'admin.index',
			[
				'vines' => $vines,
				'countries' => $dataForAdminPage['countries'],
				'vines_for_review' => collect($vines_for_review),
				'colors' => $dataForAdminPage['colors'],
				'sweets' => $dataForAdminPage['sweets'],
				'max_price' => $dataForAdminPage['minPrice'],
				'min_price' => $dataForAdminPage['minPrice'],
				'type_of_wines' => $dataForAdminPage['typeWines']
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
		$vines = $this->wineService->searchSomeWines($request)->orderby('price', 'desc');
		$vines_for_review = collect($this->wineService->generateListVines($vines->get()));
		return view('admin.searchResult', ['vines_for_review' => $vines_for_review, 'vines' => $vines->paginate(12)]);
	}

	/**
	 * GET запрос на создание вина
	 * 
	 * Генерирует страницу для начала создания вина
	 */
	public function createVine()
	{
		$dataForCreateWine = $this->getDataForCreateWine();
		return view('admin.createVine', [
			'countries' => $dataForCreateWine['countries'],
			'colors' => $dataForCreateWine['colors'],
			'producers' => $dataForCreateWine['producers'],
			'sweets' => $dataForCreateWine['sweets'],
			'types_for_wines' => $dataForCreateWine['typeWines']
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
			$winesForm = $request->all();
			$result = $this->wineService->addWine($winesForm);
			$result == true ? Session::flash('success', 'Вино успешно добавлено') : Session::flash('error', 'Произошла ошибка. Обратитесь к разработчику сайта');
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
	public function editVine(int $id)
	{
		$dataForEdit = $this->getDataForCreateWine();
		$vine = vine::find($id);
		return view('admin.editVine', [
			'vine' => $vine,
			'countries' => $dataForEdit['countries'],
			'colors' => $dataForEdit['colors'],
			'producers' => $dataForEdit['producers'],
			'sweets' => $dataForEdit['sweets'],
			'types_for_wines' => $dataForEdit['typeWines']
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
			$result = $this->wineService->updateWine($request);
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
	public function deleteVine(int $id)
	{
		$result = $this->wineService->deleteWine($id);
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
		$result = $this->wineService->disableVine($id);
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
		$result = $this->wineService->enableVine($id);
		$result == true ? Session::flash('success', 'Вино деактивировано') : Session::flash('error', 'Ошибка. Возможно вино отсутсвует в базе');
		return redirect()->back();
	}
}
