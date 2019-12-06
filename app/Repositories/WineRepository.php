<?php

namespace App\Repositories;

use App\Dto\WineDtoCreate;
use App\vine;

/**
 * Хранилище для объектов типа "Вино"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class WineRepository
{
    /**
     * Добавление вина в базу
     * 
     * @param array $wineDtoCreate - массив с добавляемыми параметрами
     * @return bool - Добавлен ли объект в базу
     */
    public function createVine(array $wineDtoCreate): bool
    {
        $wine = new vine();
        $wine->name_rus = $wineDtoCreate['name_rus'];
        $wine->name_en = $wineDtoCreate['name_en'];
        $wine->price = $wineDtoCreate['price_bottle'];
        $wine->price_cup = $wineDtoCreate['price_glass'];
        $wine->volume = $wineDtoCreate['volume'];
        $wine->year = $wineDtoCreate['year'];
        $wine->strength = $wineDtoCreate['strength'];
        $wine->sort_contain = $wineDtoCreate['sort_contain'];
        $wine->country_id = $wineDtoCreate['country'];
        $wine->color_id = $wineDtoCreate['color'];
        $wine->sweet_id = $wineDtoCreate['sweet'];
        $wine->producer_id = $wineDtoCreate['producer'];
        $wine->id_type = $wineDtoCreate['type_wine'];
        $wine->region_name = $wineDtoCreate['region_name'];
        $wine->is_coravin = $wineDtoCreate['coravin'] == 'on' ? true : false;
        $wine->image_src = $wineDtoCreate['image_src'];
        return $wine->save();
    }

    /**
     * Редактирование вина в базе
     * 
     * @param vine $wine - Редактируемая запись о вине
     * @param WineDtoCreate - Сущность с редактируемыми параметрами вина
     * @return bool Результат редактирования
     */
    public function editVine(vine $wine, WineDtoCreate $wineDto): bool
    {
        $wine->name_rus = $wineDto->nameRus;
        $wine->name_en = $wineDto->nameEn;
        $wine->price = $wineDto->price;
        $wine->price_cup = $wineDto->priceCup;
        $wine->volume = $wineDto->volume;
        $wine->year = $wineDto->year;
        $wine->strength = $wineDto->strength;
        $wine->sort_contain = $wineDto->sortContain;
        $wine->country_id = $wineDto->countryId;
        $wine->color_id = $wineDto->colorId;
        $wine->sweet_id = $wineDto->sweetId;
        $wine->producer_id = $wineDto->producerId;
        $wine->id_type = $wineDto->typeId;
        $wine->region_name = $wineDto->regionName;
        $wine->is_coravin = $wineDto->isCoravin;
        $wine->image_src = $wineDto->imageSrc;
        return $wine->save();
    }
}
