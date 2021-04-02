<?php

namespace App\Http\Controllers;

use App\Http\Requests\VinePostRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Interfaces\IServices\IWineService;
use App\Traits\AdminTrait;

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
    use AdminTrait;

    private IWineService $wineService;

    public function __construct(IWineService $wineService)
    {
        $this->wineService = $wineService;
    }

    public function index(Request $request)
    {
        $dataForAdminPage = $this->getDataForAdminPage();
        $vines = $this->wineService->filterWines($request->all());
        $vines = $vines->orderby('price', 'desc')->paginate(12);
        $vineForReviews = $this->wineService->generateListVines($vines);
        return view(
            'admin.index',
            [
                'vines' => $vines,
                'countries' => $dataForAdminPage['countries'],
                'vines_for_review' => collect($vineForReviews),
                'colors' => $dataForAdminPage['colors'],
                'sweets' => $dataForAdminPage['sweets'],
                'max_price' => $dataForAdminPage['maxPrice'],
                'min_price' => $dataForAdminPage['minPrice'],
                'type_of_wines' => $dataForAdminPage['typeWines']
            ]
        );
    }

    public function searchAdminWines(Request $request)
    {
        $vines = $this->wineService->searchSomeWines($request)->orderby('price', 'desc');
        $vinesForReview = collect($this->wineService->generateListVines($vines->get()));
        return view('admin.searchResult', ['vines_for_review' => $vinesForReview, 'vines' => $vines->paginate(12)]);
    }

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

    public function editVine(int $id)
    {
        $dataForEdit = $this->getDataForCreateWine();
        $vine = $this->wineService->getWineById($id);
        return view('admin.editVine', [
            'vine' => $vine,
            'countries' => $dataForEdit['countries'],
            'colors' => $dataForEdit['colors'],
            'producers' => $dataForEdit['producers'],
            'sweets' => $dataForEdit['sweets'],
            'types_for_wines' => $dataForEdit['typeWines']
        ]);
    }

    public function postEditVine(VinePostRequest $request)
    {
        if ($request->validated()) {
            $result = $this->wineService->updateWine($request->all());
            $result == true ? Session::flash('success', 'Вино успешно обновлено')
                : Session::flash('error', 'Произошла ошибка, обратитесь к разработчику сайта!');
            return redirect('admin-panel');
        }
        return redirect()->back();
    }

    public function deleteVine(int $id)
    {
        $result = $this->wineService->deleteWine($id);
        $result == true ? Session::flash('success', 'Вино удалено') : Session::flash('error', 'Произошла ошибка при удалении');
        return redirect('admin-panel');
    }

    public function deactivateVine(Request $request, $id): \Illuminate\Http\RedirectResponse
    {
        $result = $this->wineService->disableVine($id);
        $result == true ? Session::flash('success', 'Вино деактивировано') : Session::flash('error', 'Ошибка. Возможно вино отсутсвует в базе');
        return redirect()->back();
    }

    public function activateVine(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        $result = $this->wineService->enableVine($id);
        $result == true ? Session::flash('success', 'Вино деактивировано') : Session::flash('error', 'Ошибка. Возможно вино отсутсвует в базе');
        return redirect()->back();
    }
}
