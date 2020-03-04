<?php

namespace App\Interfaces\IServices;

use App\Http\Requests\CountryCreateRequest;

/**
 * Интерфейс для работы сервиса, который осуществляет бизнес-логику с сущностью "Страна"
 */
interface ICountryService
{
    public function createCountry(array $countryParams): bool;

    public function editCountryPost(array $countryParams, int $id): bool;

    public function deleteCountry(int $id): bool;
}
