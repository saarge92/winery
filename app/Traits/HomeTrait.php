<?php

namespace App\Traits;

/**
 * Trait позволяет цеплять данные для домашней страницы
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
trait HomeTrait
{
    private function getDataForHomePage(): array
    {
        $sliders = \App\Slider::where(['is_active' => true])->get();
        $countries = \App\Country::all();
        $sweets = \App\Sweet::all();
        $colors = \App\Color::all();
        $maxPrice = \App\Vine::max('price');
        $minPrice = \App\Vine::min('price');
        $typesForWines = \App\TypeOfWine::all();
        $paginators = \App\DisplayPaginator::all();
        return [
            'sliders' => $sliders,
            'countries' => $countries,
            'sweets' => $sweets,
            'colors' => $colors,
            'max_price' => $maxPrice,
            'min_price' => $minPrice,
            'type_of_wines' => $typesForWines,
            'paginators' => $paginators
        ];
    }
}
