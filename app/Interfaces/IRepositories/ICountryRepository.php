<?php

namespace App\Interfaces\IRepositories;

use App\country;

/**
 * Интерфейс для работы репозитория, осуществляющий операции с сущностью "Страна"
 */
interface ICountryRepository
{
    public function getCountryNameRusById(?int $id): ?string;
    public function getCountryNameEnById(?int $id): ?string;
    public function addCountry(string $nameRus, ?string $nameEn): bool;
    public function editCountry(country &$country, string $nameRus, ?string $nameEn): bool;
    public function deleteCountry(country &$country): bool;
}
