<?php

namespace App\Interfaces\IRepositories;

use App\Country;
use Illuminate\Support\Collection;

/**
 * Интерфейс для работы репозитория, осуществляющий операции с сущностью "Страна"
 */
interface ICountryRepository
{
    public function getCountryNameRusById(?int $id): ?string;

    public function getCountryNameEnById(?int $id): ?string;

    public function addCountry(string $nameRus, ?string $nameEn): bool;

    public function editCountry(Country &$country, string $nameRus, ?string $nameEn): bool;

    public function deleteCountry(Country &$country): bool;

    public function getAll(): Collection;
}
