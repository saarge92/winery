<?php

namespace App\Repositories;

use App\country;
use App\Interfaces\IRepositories\ICountryRepository;

class CountryRepository implements ICountryRepository
{
    /**
     * Получение названия вина (по русски) по id
     * 
     * Возвращает либо string либо null
     * 
     * @param int $id - входной параметр для поиска вина
     * @return string
     */
    public function getCountryNameRusById(int $id): ?string
    {
        $country = country::find($id);
        if ($country) {
            return $country->name_rus;
        }
        return null;
    }

    /**
     * Получение названия вина (по-английский) по id
     * 
     * Возвращает либо string либо null
     * 
     * @param int $id - входной параметр для поиска вина
     * @return string
     */
    public function getCountryNameEnById(int $id): ?string
    {
        $country = country::find($id);
        if ($country) {
            return $country->name_en;
        }
        return null;
    }
}
