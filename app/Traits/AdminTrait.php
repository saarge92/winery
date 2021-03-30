<?php

namespace App\Traits;


/**
 * Вспомогательный набор функций для подтягивания данных для 
 * макета админской части
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
trait AdminTrait
{
    /**
     * Получаем необходимые данные для макета
     */
    private function getDataForAdminPage(): array
    {
        $countries = \App\Country::all();
        $sweets = \App\Sweet::all();
        $colors = \App\Color::all();
        $maxPrice = \App\Vine::max('price');
        $minPrice = \App\Vine::min('price');
        $typeWines = \App\TypeOfWine::all();
        return [
            'colors' => $colors,
            'countries' => $countries,
            'sweets' => $sweets,
            'maxPrice' => $maxPrice,
            'minPrice' => $minPrice,
            'typeWines' => $typeWines
        ];
    }

    /**
     * Получение данных для Get-страницы на создания вина
     */
    private function getDataForCreateWine(): array
    {
        $countries = \App\Country::all();
        $colors = \App\Color::all();
        $producers = \App\Producer::all();
        $sweets = \App\Sweet::all();
        $typeWines  = \App\TypeOfWine::all();
        return [
            'countries' => $countries,
            'colors' => $colors,
            'producers' => $producers,
            'sweets' => $sweets,
            'typeWines' => $typeWines
        ];
    }
}
