<?php

namespace App\Traits;


/**
 * Вспомогательный набор функций для подтягивания данных для 
 * макета админской части
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
trait adminTrait
{
    /**
     * Получаем необходимые данные для макета
     */
    private function getDataForAdminPage(): array
    {
        $countries = \App\country::all();
        $sweets = \App\sweet::all();
        $colors = \App\color::all();
        $maxPrice = \App\Vine::max('price');
        $minPrice = \App\Vine::min('price');
        $typeWines = \App\type_of_wine::all();
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
        $countries = \App\country::all();
        $colors = \App\color::all();
        $producers = \App\producer::all();
        $sweets = \App\sweet::all();
        $typeWines  = \App\type_of_wine::all();
        return [
            'countries' => $countries,
            'colors' => $colors,
            'producers' => $producers,
            'sweets' => $sweets,
            'typeWines' => $typeWines
        ];
    }
}
