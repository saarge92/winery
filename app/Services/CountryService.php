<?php

namespace App\Services;

use App\Http\Requests\CountryCreateRequest;
use App\Interfaces\IServices\ICountryService;
use App\Interfaces\IRepositories\ICountryRepository;
use App\country;

/**
 * Сервис для работы с сущностью "Страна"
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
     */
    public function createCountry(CountryCreateRequest $request): bool
    { 
        $nameRus = $request->get('name_rus');
        $nameEn = $request->get('name_en');
        $result = $this->countryRepository->addCountry($nameRus,$nameEn);
        return $result;
    }

    /**
     * Редактирование страны в базе
     */
    public function editCountryPost(CountryCreateRequest $request, int $id) : bool
    {
        $country = country::find($id);
        if ($country != null) {
            $nameRus = $request->get('name_rus');
            $nameEn = $request->get('name_en');
            $result = $this->countryRepository->editCountry($country,$nameRus,$nameEn);            
            return $result;
        }
        return false;
    }
}
