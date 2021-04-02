<?php

namespace App\Services;

use App\Interfaces\IFileUploadService;
use App\Vine;
use Illuminate\Http\Request;
use App\Repositories\SweetRepository;
use App\Repositories\TypeWineRepository;
use App\Interfaces\IServices\IWineService;
use App\Interfaces\IRepositories\IColorRepository;
use App\Interfaces\IRepositories\ICountryRepository;
use App\Interfaces\IRepositories\IProducerRepository;
use App\Repositories\WineRepository;

/**
 * Сервис для обработки запросов,
 * связанных с сущностью "Вино"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class WineService implements IWineService
{
    private ICountryRepository $countryRepository;
    private IColorRepository $colorRepository;
    private SweetRepository $sweetRepository;
    private IProducerRepository $producerRepository;
    private TypeWineRepository $typeWineRepository;
    private WineRepository $wineRepository;
    private IFileUploadService $fileUploadService;
    private const FOLDER_UPLOAD = '/storage/wines/';

    public function __construct(ICountryRepository $countryRepository, IColorRepository $colorRepository,
                                SweetRepository $sweetRepository, IProducerRepository $producerRepository,
                                TypeWineRepository $typeWineRepository, WineRepository $wineRepository,
                                IFileUploadService $fileUploadService)
    {
        $this->countryRepository = $countryRepository;
        $this->colorRepository = $colorRepository;
        $this->sweetRepository = $sweetRepository;
        $this->producerRepository = $producerRepository;
        $this->typeWineRepository = $typeWineRepository;
        $this->wineRepository = $wineRepository;
        $this->fileUploadService = $fileUploadService;
    }

    public function filterWines(array $filter): object
    {
        $vines = new Vine;
        $country_select = isset($filter['country']) ? $filter['country'] : [];
        $color_select = isset($filter['color']) ? $filter['color'] : [];
        $sweet_select = isset($filter['sweet']) ? $filter['sweet'] : [];
        $price_min = isset($filter['price_min']) ? $filter['price_min'] : null;
        $price_max = isset($filter['price_max']) ? $filter['price_max'] : null;
        $type_of_wine = isset($filter['types_wines']) ? $filter['types_wines'] : [];
        if (!empty($type_of_wine)) {
            $vines = $vines->whereIn('id_type', $type_of_wine);
        }
        if (!empty($country_select)) {
            $vines = $vines->whereIn('country_id', $country_select);
        }
        if (!empty($color_select)) {
            $vines = $vines->whereIn('color_id', $color_select);
        }
        if (!empty($sweet_select)) {
            $vines = $vines->whereIn('sweet_id', $sweet_select);
        }
        if (isset($price_min)) {
            $vines = $vines->where('price', '>=', $price_min);
        }
        if (isset($price_max)) {
            $vines = $vines->where('price', '<=', $price_max);
        }
        return $vines;
    }

    public function generateListVines($vines): array
    {
        $vinesForReview = array();
        foreach ($vines as $vine) {
            $vineElement = [];
            $vineElement['id'] = $vine->id;
            $vineElement['name_rus'] = $vine->name_rus;
            $vineElement['name_en'] = $vine->name_en;
            $vineElement['price'] = $vine->price;
            $vineElement['price_cup'] = $vine->price_cup;
            $vineElement['volume'] = $vine->volume;
            $vineElement['year'] = $vine->year;
            $vineElement['strength'] = $vine->strength;
            $vineElement['sort_contain'] = $vine->sort_contain;
            $vineElement['image_src'] = $vine->image_src;
            $vineElement['country'] = $this->countryRepository->getCountryNameRusById($vine->country_id);
            $vineElement['country_en'] = $this->countryRepository->getCountryNameEnById($vine->country_id);
            $vineElement['color'] = $this->colorRepository->getColorNameById($vine->color_id);
            $vineElement['sweet'] = $this->sweetRepository->getSweetNameById($vine->sweet_id);
            $vineElement['country_en'] = $this->countryRepository->getCountryNameEnById($vine->country_id);
            $vineElement['is_active'] = $vine->is_active;
            $vineElement['producer'] = $this->producerRepository->getProducerName($vine->producer_id);
            $vineElement['type_name'] = $this->typeWineRepository->getTypeNameById($vine->id_type);
            $vineElement['region_name'] = $vine->region_name;
            $vineElement['is_coravin'] = $vine->is_coravin;
            $vinesForReview[] = $vineElement;
        }
        return $vinesForReview;
    }

    public function searchSomeWines(Request $request)
    {
        return $this->wineRepository->searchWinesByName($request->get('wine_name'));
    }

    public function addWine(array $wineForm): bool
    {
        $file = isset($wineForm['image']) ? $wineForm['image'] : null;
        if ($file != null) {
            $filename = $this->fileUploadService->uploadFile($file, self::FOLDER_UPLOAD, $wineForm['name_rus']);
            $wineForm['image_src'] = 'wines/' . $filename;
        }
        return $this->wineRepository->createVine($wineForm);
    }

    public function updateWine(array $editWineForm): bool
    {
        $id = $editWineForm['id'];
        $editWine = $this->wineRepository->getVineById($id);
        if ($editWine) {
            $file = isset($editWineForm['image']) ? $editWineForm['image'] : null;
            if ($file != null) {
                if ($editWine->image_src != null) {
                    $this->fileUploadService->deleteFile($editWine->image_src);
                }
                $filename = $this->fileUploadService->uploadFile($file, self::FOLDER_UPLOAD, $editWineForm['name_rus']);
                $editWineForm['imageSrc'] = 'wines/' . $filename;
            }
            return $this->wineRepository->editVine($editWine, $editWineForm);
        }
        return false;
    }

    public function deleteWine(int $id): bool
    {
        $deletedVine = $this->wineRepository->getVineById($id);
        if ($deletedVine != null) {
            if ($deletedVine->image_src != null) {
                $this->fileUploadService->deleteFile($deletedVine->image_src);
            }
            return $deletedVine->delete();
        }
        return false;
    }

    public function disableVine(int $id): bool
    {
        $vine = $this->wineRepository->getVineById($id);
        if ($vine != null) {
            $vine->is_active = false;
            return $vine->save();
        }
        return false;
    }

    public function enableVine(int $id): bool
    {
        $vine = $this->wineRepository->getVineById($id);
        if ($vine != null) {
            $vine->is_active = true;
            $vine->save();
            return true;
        }
        return false;
    }

    public function getWineById(int $id): ?Vine
    {
        return $this->wineRepository->getVineById($id);
    }
}
