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
     * @param WineDtoCreate $wineDtoCreate - объект с добавляемыми параметрами
     * @return bool - Добавлен ли объект в базу
     */
    public function createVine(WineDtoCreate $wineDtoCreate): bool
    {
        $wine = new vine();
        $wine->name_rus = $wineDtoCreate->nameRus;
        $wine->name_en = $wineDtoCreate->nameEn;
        $wine->price = $wineDtoCreate->price;
        $wine->price_cup = $wineDtoCreate->priceCup;
        $wine->volume = $wineDtoCreate->volume;
        $wine->year = $wineDtoCreate->year;
        $wine->strength = $wineDtoCreate->strength;
        $wine->sort_contain = $wineDtoCreate->sortContain;
        $wine->country_id = $wineDtoCreate->countryId;
        $wine->color_id = $wineDtoCreate->colorId;
        $wine->sweet_id = $wineDtoCreate->sweetId;
        $wine->producer_id = $wineDtoCreate->producerId;
        $wine->id_type = $wineDtoCreate->typeId;
        $wine->region_name = $wineDtoCreate->regionName;
        $wine->is_coravin = $wineDtoCreate->isCoravin;
        $wine->image_src = $wineDtoCreate->imageSrc;
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
