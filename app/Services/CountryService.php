<?php

namespace App\Services;

use App\Interfaces\IServices\ICountryService;
use App\Interfaces\IRepositories\ICountryRepository;


/**
 * Сервис для работы с сущностью "Страна"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class CountryService implements ICountryService
{
    private ICountryRepository $countryRepository;

    public function __construct(ICountryRepository $countryRepository)
    {
        $this->countryRepository = $countryRepository;
    }

    public function createCountry(array $countryParams): bool
    {
        return $this->countryRepository->addCountry($countryParams['name_rus'], $countryParams['name_en']);
    }

    public function editCountryPost(array $countryParams, int $id): bool
    {
        $country = $this->countryRepository->getById($id);
        if ($country) {
            return $this->countryRepository->editCountry($country, $countryParams['name_rus'], $countryParams['name_en']);
        }
        return false;
    }

    public function deleteCountry(int $id): bool
    {
        $deleted = false;
        $country = $this->countryRepository->getById($id);
        if ($country) $deleted = $this->countryRepository->deleteCountry($country);
        return $deleted;
    }
}
