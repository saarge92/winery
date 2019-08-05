<?php

namespace App\Services;

use App\vine;
use Illuminate\Http\Request;
use App\Repositories\SweetRepository;
use App\Http\Requests\VinePostRequest;
use App\Repositories\TypeWineRepository;
use App\Interfaces\IServices\IWineService;
use App\Interfaces\IRepositories\IColorRepository;
use App\Interfaces\IRepositories\ICountryRepository;
use App\Interfaces\IRepositories\IProducerRepository;
use App\Dto\WineDtoCreate;
use App\Repositories\WineRepository;

class WineService implements IWineService
{
    private $countryRepository;
    private $colorRepository;
    private $sweetRepository;
    private $producerRepository;
    private $typeWineRepository;
    private $wineRepository;

    /**
     * Внедрение зависимостей
     */
    public function __construct(ICountryRepository $countryRepository, IColorRepository $colorRepository, SweetRepository $sweetRepository, IProducerRepository $producerRepository, TypeWineRepository $typeWineRepository, WineRepository $wineRepository)
    {
        $this->countryRepository = $countryRepository;
        $this->colorRepository = $colorRepository;
        $this->sweetRepository = $sweetRepository;
        $this->producerRepository = $producerRepository;
        $this->typeWineRepository = $typeWineRepository;
        $this->wineRepository = $wineRepository;
    }

    /**
     * Фильтрация вин согласно списку параметров
     * 
     * @param array $params - список параметров для фильтрации
     * 
     * @return $vines - Список с фильтрованными финами
     */
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

    /**
     * Формирует и инииализирует список вина в соответствующий вин
     * 
     * @param array $vines - список записей из бд
     * @return array
     */
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

    /**
     * Поиск вин согласно параметрам
     * 
     * @param Request $request - Запрос с параметрами
     */
    public function searchSomeWines(Request $request)
    {
        $vines = vine::where('is_active', true)->where('name_rus', 'LIKE', '%' . $request->get('wine_name') . '%')
            ->orWhere('name_en', 'LIKE', '%' . $request->get('wine_name') . '%');
        return $vines;
    }

    /**
     * Обработка запроса на создания вина в базе
     * 
     * @param VinePostRequest $request - Request с параметрами для добавления вина
     * @return bool - Возвращает булево значение, сохранено ли значение
     * 
     */
    public function addWine(VinePostRequest $request): bool
    {
        $wineDto = new WineDtoCreate();
        $wineDto->nameRus = $request->get('name_rus');
        $wineDto->nameEn = $request->get('name_en');
        $wineDto->price = $request->get('price_bottle');
        $wineDto->priceCup = $request->get('price_glass');
        $wineDto->volume = $request->get('volume');
        $wineDto->year = $request->get('year');
        $wineDto->strength = $request->get('strength');
        $wineDto->sortContain = $request->get('sort_contain');
        $wineDto->countryId = $request->get('country');
        $wineDto->colorId = $request->get('color');
        $wineDto->sweetId = $request->get('sweet');
        $wineDto->producerId = $request->get('producer');
        $wineDto->typeId = $request->get('type_wine');
        $wineDto->regionName = $request->get('region_name');
        $wineDto->isCoravin = $request->get('coravin') == 'on' ? true : false;

        $file = $request->file('image');
        if (isset($file)) {
            $filename = $request->get('name_rus') . '_' . date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();
            $destination = public_path() . '/storage/wines/';
            $file->move($destination, $filename);
            $wineDto->imageSrc = 'wines/' . $filename;
        }

        $created = $this->wineRepository->createVine($wineDto);
        return $created;
    }
}
