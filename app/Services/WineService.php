<?php

namespace App\Services;

use App\vine;
use App\Interfaces\IServices\IWineService;
use App\Interfaces\IRepositories\ICountryRepository;
use App\Interfaces\IRepositories\IColorRepository;
use App\Repositories\SweetRepository;
use App\Interfaces\IRepositories\IProducerRepository;
use App\Repositories\TypeWineRepository;
use Illuminate\Http\Request;

class WineService implements IWineService
{
    private $countryRepository;
    private $colorRepository;
    private $sweetRepository;
    private $producerRepository;
    private $typeWineRepository;

    public function __construct(ICountryRepository $countryRepository, IColorRepository $colorRepository, SweetRepository $sweetRepository, IProducerRepository $producerRepository, TypeWineRepository $typeWineRepository)
    {
        $this->countryRepository = $countryRepository;
        $this->colorRepository = $colorRepository;
        $this->sweetRepository = $sweetRepository;
        $this->producerRepository = $producerRepository;
        $this->typeWineRepository = $typeWineRepository;
    }

    public function filterWines(array $filter)
    {
        $vines = new vine;
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
            $vineElement = new \stdClass();
            $vineElement->id = $vine->id;
            $vineElement->name_rus = $vine->name_rus;
            $vineElement->name_en = $vine->name_en;
            $vineElement->price = $vine->price;
            $vineElement->price_cup = $vine->price_cup;
            $vineElement->volume = $vine->volume;
            $vineElement->year = $vine->year;
            $vineElement->strength = $vine->strength;
            $vineElement->sort_contain = $vine->sort_contain;
            $vineElement->image_src = $vine->image_src;
            $vineElement->country = $this->countryRepository->getCountryNameRusById($vine->country_id);
            $vineElement->country_en = $this->countryRepository->getCountryNameEnById($vine->country_id);
            $vineElement->color = $this->colorRepository->getColorNameById($vine->color_id);
            $vineElement->sweet = $this->sweetRepository->getSweetNameById($vine->sweet_id);
            $vineElement->country_en = $this->countryRepository->getCountryNameEnById($vine->country_id);
            $vineElement->is_active = $vine->is_active;
            $vineElement->producer = $this->producerRepository->getProducerName($vine->producer_id);
            $vineElement->type_name = $this->typeWineRepository->getTypeNameById($vine->id_type);
            $vineElement->region_name = $vine->region_name;
            $vineElement->is_coravin = $vine->is_coravin;
            $vinesForReview[] = $vineElement;
        }
        return $vinesForReview;
    }

    public function searchSomeWines(Request $request)
    {
        $vines = vine::where('is_active', true)->where('name_rus', 'LIKE', '%' . $request->get('wine_name') . '%')
            ->orWhere('name_en', 'LIKE', '%' . $request->get('wine_name') . '%');
        return $vines;
    }
}
