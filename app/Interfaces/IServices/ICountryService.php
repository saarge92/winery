<?php

namespace App\Interfaces\IServices;

use App\Http\Requests\CountryCreateRequest;

/**
 * Интерфейс для работы сервиса, который осуществляет бизнес-логику с сущностью "Страна"
 */
interface ICountryService
{
    public function createCountry(CountryCreateRequest $request): bool;
    public function editCountryPost(CountryCreateRequest $request, int $id) : bool;
}
