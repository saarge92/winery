<?php

namespace App\Repositories;

use App\Vine;

/**
 * Хранилище для объектов типа "Вино"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class WineRepository
{
    public function createVine(array $wineDtoCreate): bool
    {
        $wine = new Vine();
        $wine->name_rus = $wineDtoCreate['name_rus'];
        if (isset($wineDtoCreate['name_en'])) $wine->name_en = $wineDtoCreate['name_en'];
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
        if (isset($wineDtoCreate['region_name'])) $wine->region_name = $wineDtoCreate['region_name'];
        if (isset($wineDtoCreate['coravin'])) $wine->is_coravin = $wineDtoCreate['coravin'] == 'on' ? true : false;
        if (isset($wineDtoCreate['image_src'])) $wine->image_src = $wineDtoCreate['image_src'];
        return $wine->save();
    }

    public function editVine(Vine $wine, array $wineDto): bool
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
        if (isset($wineDto['image_src'])) $wine->image_src = $wineDto['image_src'];
        return $wine->save();
    }

    public function getVineById(int $id): ?Vine
    {
        return Vine::find($id);
    }

    public function getMinPrice(): int
    {
        return Vine::min('price');
    }

    public function getMaxPrice(): int
    {
        return Vine::max('price');
    }

    public function searchWinesByName(string $name, bool $isActive = true)
    {
        return Vine::where('is_active', $isActive)->where('name_rus', 'LIKE', '%' . $name . '%')
            ->orWhere('name_en', 'LIKE', '%' . $name . '%');
    }
}
