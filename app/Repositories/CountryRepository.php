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

    /**
     * Добавление страны
     * 
     * @param string $nameRus Название страны по русски
     * @param ?string $nameEn Название по анлийски
     * @return bool Результат сохранения
     */
    public function addCountry(string $nameRus, ?string $nameEn): bool
    {
        $result = country::create([
            'name_rus' => $nameRus,
            'name_en' => $nameEn
        ])->save();
        return $result;
    }

    /**
     * Редактирование страны
     */
    public function editCountry(country &$country, string $nameRus, ?string $nameEn): bool
    {
        $country->name_rus = $nameRus;
        $country->name_en = $nameEn;
        $result = $country->save();
        return $result;
    }

    /**
     * Удаление страны
     */
    public function deleteCountry(country $country): bool
    {
        return $country->delete();
    }
}
