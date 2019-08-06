<?php

namespace App\Repositories;

use App\country;
use App\Interfaces\IRepositories\ICountryRepository;

/**
 * Репозиторий для работы с таблицей "Страны вин"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class CountryRepository implements ICountryRepository
{
    /**
     * Получение названия вина (по русски) по id
     * 
     * Возвращает либо string либо null
     * 
     * @param int $id - Входной параметр для поиска вина
     * @return string - Вернет название вина (по-русски)
     */
    public function getCountryNameRusById(?int $id): ?string
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
     * @return string - Вернет название по английски
     */
    public function getCountryNameEnById(?int $id): ?string
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
     * 
     * @param country $country - Редактируемая запись о стране
     * @param string $nameRus- Название (русское), которое хотим присвоить
     * @param string $nameEn - Название (английское), которое хотим присвоить
     * @return bool - Отредактирована ли запись
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
    public function deleteCountry(country &$country): bool
    {
        return $country->delete();
    }
}
