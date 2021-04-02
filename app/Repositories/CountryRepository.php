<?php

namespace App\Repositories;

use App\Country;
use App\Interfaces\IRepositories\ICountryRepository;
use Illuminate\Support\Collection;

/**
 * Репозиторий для работы с таблицей "Страны вин"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class CountryRepository implements ICountryRepository
{
    public function getCountryNameRusById(?int $id): ?string
    {
        $country = Country::find($id);
        if ($country) {
            return $country->name_rus;
        }
        return null;
    }

    public function getCountryNameEnById(?int $id): ?string
    {
        $country = Country::find($id);
        if ($country) {
            return $country->name_en;
        }
        return null;
    }

    public function addCountry(string $nameRus, ?string $nameEn): bool
    {
        return Country::create([
            'name_rus' => $nameRus,
            'name_en' => $nameEn
        ])->save();
    }

    public function editCountry(Country &$country, string $nameRus, ?string $nameEn): bool
    {
        $country->name_rus = $nameRus;
        $country->name_en = $nameEn;
        return $country->save();
    }

    public function deleteCountry(Country &$country): bool
    {
        return $country->delete();
    }

    public function getAll(): Collection
    {
        return Country::all();
    }

    public function getById(int $id): ?Country
    {
        return Country::find($id);
    }
}
