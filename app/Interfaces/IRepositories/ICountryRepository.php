<?php

namespace App\Interfaces\IRepositories;

use App\Country;
use Illuminate\Support\Collection;

/**
 * Интерфейс для работы репозитория, осуществляющий операции с сущностью "Страна"
 */
interface ICountryRepository
{
    function getCountryNameRusById(?int $id): ?string;

    function getCountryNameEnById(?int $id): ?string;

    function addCountry(string $nameRus, ?string $nameEn): bool;

    function editCountry(Country &$country, string $nameRus, ?string $nameEn): bool;

    function deleteCountry(Country &$country): bool;

    function getAll(): Collection;

    function getById(int $id): ?Country;
}
