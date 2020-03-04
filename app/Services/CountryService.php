<?php

namespace App\Services;

use App\Http\Requests\CountryCreateRequest;
use App\Interfaces\IServices\ICountryService;
use App\Interfaces\IRepositories\ICountryRepository;
use App\country;

/**
 * Сервис для работы с сущностью "Страна"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class CountryService implements ICountryService
{
    private $countryRepository;

    public function __construct(ICountryRepository $countryRepository)
    {
        $this->countryRepository = $countryRepository;
    }

    /**
     * Создание страны в базе
     *
     * @param array $countryParams Параметры создания страны
     * @return bool - Создана ли страна
     */
    public function createCountry(array $countryParams): bool
    {
        return $this->countryRepository->addCountry($countryParams['name_rus'], $countryParams['name_en']);
    }

    /**
     * Редактирование страны в базе
     *
     * @param array $countryParams Параметры обновления
     * @param int $id - Id страны
     * @return bool - Отредактирован ли запись
     */
    public function editCountryPost(array $countryParams, int $id): bool
    {
        $country = country::find($id);
        if ($country != null) {
            return $this->countryRepository->editCountry($country, $countryParams['name_rus'], $countryParams['name_en']);
        }
        return false;
    }

    /**
     * Удаление страны из базы
     *
     * @param int $id - Id страны
     * @return bool - Удален ли страна
     */
    public function deleteCountry(int $id): bool
    {
        $deleted = false;
        $country = country::find($id);
        if ($country) $deleted = $this->countryRepository->deleteCountry($country);
        return $deleted;
    }
}
