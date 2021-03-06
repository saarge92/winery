<?php

namespace App\Http\Controllers;

use App\Vine;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Traits\PaginateTrait;
use App\Interfaces\IServices\IWineService;
use App\Traits\HomeTrait;

/**
 * Контроллер для работы главной (frontend) страницы
 *
 * Предоставляет методы для работы с клиентской частью
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class HomeController extends Controller
{
    use PaginateTrait;
    use HomeTrait;

    private IWineService $wineService;

    public function __construct(IWineService $wineService)
    {
        $this->wineService = $wineService;
    }

    public function index(Request $request)
    {
        $dataFormHomePage = $this->getDataForHomePage();
        $vines = $this->wineService->filterWines($request->all());
        $paginateNumbers = $this->getPaginateNumber($request);
        if ($paginateNumbers == 0) {
            $vines = $vines->where(['is_active' => true])->orderby('price', 'desc');
            $vines_for_review = $this->wineService->generateListVines($vines->get());
        } else {
            $vines = $vines->where(['is_active' => true])->orderby('price', 'desc')->paginate($paginateNumbers);
            $vines_for_review = $this->wineService->generateListVines($vines);
        }
        return view('frontend.index', [
            'sliders' => $dataFormHomePage['sliders'],
            'vines' => $vines,
            'countries' => $dataFormHomePage['countries'],
            'vines_for_review' => collect($vines_for_review),
            'colors' => $dataFormHomePage['colors'],
            'sweets' => $dataFormHomePage['sweets'],
            'max_price' => $dataFormHomePage['max_price'],
            'min_price' => $dataFormHomePage['min_price'],
            'type_of_wines' => $dataFormHomePage['type_of_wines'],
            'paginate_number' => $paginateNumbers,
            'paginators' => $dataFormHomePage['paginators']
        ]);
    }

    public function getCountOfChoice(Request $request): JsonResponse
    {
        $filter_array = [];
        parse_str($request->get('params'), $filter_array);
        $count_vines = count($this->wineService->filterWines($filter_array)->where('is_active', true)->get());
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
        $some_wines = Vine::where('is_active', true)->where('name_rus', 'LIKE', '%' . $name . '%')
            ->orWhere('name_en', 'LIKE', '%' . $name . '%')->get();
        return response()->json(['wines' => $some_wines]);
    }

    /**
     * Получение вина по id
     *
     * @param Request $request Get-запрос
     * @param $id Номер вина
     */
    public function getWine(int $id)
    {
        $dataFormHomePage = $this->getDataForHomePage();
        $vine = Vine::where(['id' => $id, 'is_active' => true])->get();
        $vine_for_review = count($vine) != 0 ? collect($this->wineService->generateListVines($vine))[0] : null;
        return view('frontend.viewWine', [
            'vine' => $vine_for_review,
            'sliders' => $dataFormHomePage['sliders'],
            'countries' => $dataFormHomePage['countries'],
            'sweets' => $dataFormHomePage['sweets'],
            'colors' => $dataFormHomePage['colors'],
            'max_price' => $dataFormHomePage['max_price'],
            'min_price' => $dataFormHomePage['min_price'],
            'type_of_wines' => $dataFormHomePage['type_of_wines']
        ]);
    }

    /**
     * Поиск вина
     *
     * @param Request $request POST-запрос
     */
    public function search(Request $request)
    {
        $dataFormHomePage = $this->getDataForHomePage();
        $paginate_number = $this->getPaginateNumber($request);
        $vines = $this->wineService->searchSomeWines($request)->orderby('price', 'desc')->paginate($paginate_number);
        $vines_for_review = collect($this->wineService->generateListVines($vines));
        return view('frontend.searchResult', [
            'vines_for_review' => $vines_for_review,
            'vines' => $vines,
            'sliders' => $dataFormHomePage['sliders'],
            'countries' => $dataFormHomePage['countries'],
            'sweets' => $dataFormHomePage['sweets'],
            'colors' => $dataFormHomePage['colors'],
            'max_price' => $dataFormHomePage['max_price'],
            'min_price' => $dataFormHomePage['min_price'],
            'type_of_wines' => $dataFormHomePage['type_of_wines'],
            'paginators' => $dataFormHomePage['paginators'],
            'paginate_number' => $paginate_number,
        ]);
    }
}
