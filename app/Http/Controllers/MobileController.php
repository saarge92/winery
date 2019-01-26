<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\type_of_wine;
use App\sweet;
use App\producer;
use App\country;
use App\color;
use App\vine;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Traits\vineTrait;
use Illuminate\Http\JsonResponse;

/**
 * MobileController для api запросов мобильного приложения
 * 
 * Реализация простых GET, POST запросов для api запросов
 * мобильного приложения
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
class MobileController extends Controller
{
    /** @var array массив параметров json-ответа */
    private $header_info;

    use vineTrait;

    public function __construct()
    {
        $this->header_info = ['Content-Type' => 'application/json;charset=UTF-8', 'charset' => 'utf-8'];
    }

    /**
     * Получение списка типов вина
     * @return JsonResponse
     */
    public function getAllTypes() : JsonResponse
    {
        $all_types = type_of_wine::all();
        return response()->json($all_types, 200, $this->header_info, JSON_UNESCAPED_UNICODE);
    }

    /**
     * Получение списка сладостей вина
     * @return JsonResponse
     */
    public function getAllSweets() : JsonResponse
    {
        $all_sweets = sweet::all();
        return response()->json($all_sweets, 200, $this->header_info, JSON_UNESCAPED_UNICODE);
    }

    /**
     * Получение списка производителей
     * @return JsonResponse
     */
    public function getAllProducers() : JsonResponse
    {
        $all_producers = producer::all();
        return response()->json($all_producers, 200, $this->header_info, JSON_UNESCAPED_UNICODE);
    }

    /**
     * Получение списка стран вин
     * @return JsonResponse
     */
    public function getAllCountries() : JsonResponse
    {
        $allCountries = country::all();
        return response()->json($allCountries, 200, $this->header_info, JSON_UNESCAPED_UNICODE);
    }

    /**
     * Получение списка цвета вин
     * @return JsonResponse
     */
    public function getAllColors() : JsonResponse
    {
        $allColors = color::all();
        return response()->json($allColors, 200, $this->header_info, JSON_UNESCAPED_UNICODE);
    }
    /**
     * Получение минимальной цены вин
     * @return int
     */
    public function getMinPrice() : int
    {
        $minPrice = vine::min('price');
        return $minPrice;
    }

    /**
     * Получение максимальной цены вин
     * @return int
     */
    public function getMaxPrice() : int
    {
        $maxPrice = vine::max('price');
        return $maxPrice;
    }

    /**
     * API для получения вин
     * 
     * Получение вин по запросу
     * 
     * @param Requset $request - входной параметр
     * @return JsonResponse
     */
    public function getRequestedWines(Request $request) : JsonResponse
    {
        /**Фильтруем вина */
        $filteredWines = $this->filterVines($request);

        /**Текущая страница */
        isset($request['page']) ? $currentPage = $request['page'] : $currentPage = 1;

        /**Результат пагинации */
        $paginatedWines = $filteredWines->paginate(12, ['*'], 'page', $currentPage);

        $resultFilter = $this->generateListVines($paginatedWines);
        $result = [
            'result' => $resultFilter,
            'countPages' => $paginatedWines->lastPage()
        ];
        return response()->json($result, 200, $this->header_info, JSON_UNESCAPED_UNICODE);
    }
}
