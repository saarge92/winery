<?php

namespace App\Http\Controllers;

use App\Interfaces\IRepositories\IColorRepository;
use App\Interfaces\IRepositories\ICountryRepository;
use App\Repositories\ProducerRepository;
use App\Repositories\SweetRepository;
use App\Repositories\TypeWineRepository;
use App\Repositories\WineRepository;
use Illuminate\Http\JsonResponse;
use App\Interfaces\IServices\IWineService;

/**
 * MobileController для api запросов мобильного приложения
 *
 * Реализация простых GET, POST запросов для api запросов
 * мобильного приложения
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class MobileController extends Controller
{
    private IWineService $wineService;

    public function __construct(IWineService $wineService)
    {
        $this->wineService = $wineService;
    }

    public function getAllTypes(TypeWineRepository $typeWineRepository): JsonResponse
    {
        $allTypes = $typeWineRepository->getAll();
        return response()->json($allTypes, JsonResponse::HTTP_OK);
    }

    public function getAllSweets(SweetRepository $sweetRepository): JsonResponse
    {
        $allSweets = $sweetRepository->findAll();
        return response()->json($allSweets, JsonResponse::HTTP_OK);
    }

    public function getAllProducers(ProducerRepository $producerRepository): JsonResponse
    {
        $allProducers = $producerRepository->getAll();
        return response()->json($allProducers, JsonResponse::HTTP_OK);
    }

    public function getAllCountries(ICountryRepository $countryRepository): JsonResponse
    {
        $allCountries = $countryRepository->getAll();
        return response()->json($allCountries, JsonResponse::HTTP_OK);
    }

    public function getAllColors(IColorRepository $colorRepository): JsonResponse
    {
        $allColors = $colorRepository->getAllColors();
        return response()->json($allColors, JsonResponse::HTTP_OK);
    }

    public function getMinPrice(WineRepository $wineRepository): int
    {
        return $wineRepository->getMinPrice();
    }

    public function getMaxPrice(WineRepository $wineRepository): int
    {
        return $wineRepository->getMaxPrice();
    }

    public function getRequestedWines(Request $request): JsonResponse
    {
        $filteredWines = $this->wineService->filterWines($request->all());

        isset($request['page']) ? $currentPage = $request['page'] : $currentPage = 1;

        $paginatedWines = $filteredWines->paginate(12, ['*'], 'page', $currentPage);

        $resultFilter = $this->wineService->generateListVines($paginatedWines);
        $result = [
            'result' => $resultFilter,
            'countPages' => $paginatedWines->lastPage()
        ];
        return response()->json($result, JsonResponse::HTTP_OK);
    }

    public function getWineById(int $id): JsonResponse
    {
        $wine = $this->wineService->getWineById($id);
        return response()->json($wine, JsonResponse::HTTP_OK);
    }
}
