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
     * @param WineDtoCreate - Массив с редактируемыми параметрами вина
     * @return bool Результат редактирования
     */
    public function editVine(vine $wine, array $wineDto): bool
    {
        $wine->name_rus = $wineDto['name_rus'];
        if (isset($wineDto['name_en'])) $wine->name_en = $wineDto['name_en'];
        $wine->price = $wineDto['price_bottle'];
        $wine->price_cup = $wineDto['price_glass'];
        $wine->volume = $wineDto['volume'];
        $wine->year = $wineDto['year'];
        $wine->strength = $wineDto['strength'];
        $wine->sort_contain = $wineDto['sort_contain'];
        $wine->country_id = $wineDto['country'];
        $wine->color_id = $wineDto['color'];
        $wine->sweet_id = $wineDto['sweet'];
        $wine->producer_id = $wineDto['producer'];
        $wine->id_type = $wineDto['type_wine'];
        if (isset($wineDto['region_name'])) $wine->region_name = $wineDto['region_name'];
        if (isset($wineDto['coravin'])) $wine->is_coravin = $wineDto['coravin'] == 'on' ? true : false;
        if (isset($wineDto['imageSrc'])) $wine->image_src = $wineDto['imageSrc'];
        return $wine->save();
    }
}
