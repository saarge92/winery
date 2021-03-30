<?php

namespace Tests\Unit;

use App\Country;
use App\Interfaces\IServices\ICountryService;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

/**
 * Тестирование сервис класса CountryService
 *
 * @package Tests\Unit
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class CountryServiceTest extends TestCase
{
    use WithFaker;

    /**
     * Тестирование создания страны в базе
     * Тестирование метода createCountry
     */
    public function testCreateCountry()
    {
        $countryService = $this->createCountryResolver();
        $createParams = [
            'name_rus' => $this->faker->name,
            'name_en' => $this->faker->name
        ];
        $isCreated = $countryService->createCountry($createParams);
        $this->assertSame($isCreated, true);
    }

    /**
     * Тестирование обновления страны
     * Тестирование EditCountry
     */
    public function testEditCountry()
    {
        $countryService = $this->createCountryResolver();
        $randomCountry = Country::orderByRaw("RAND()")->first();
        $editParams = [
            'name_rus' => $this->faker->country,
            'name_en' => $this->faker->country
        ];
        $isEdited = $countryService->editCountryPost($editParams, $randomCountry['id']);
        $this->assertSame($isEdited, true);
    }

    /**
     * Тестирование удаления страны из базы
     * Тестирование deleteCountry
     */
    public function testDeleteCountry()
    {
        $countryService = $this->createCountryResolver();
        $randomCountry = Country::orderByRaw("RAND()")->first();
        $isDeleted = $countryService->deleteCountry($randomCountry['id']);
        $this->assertSame($isDeleted, true);
    }

    /**
     * Генерация и получение зависимости ICountryService
     * @return ICountryService полученная зависимость
     */
    private function createCountryResolver(): ICountryService
    {
        return resolve(ICountryService::class);
    }
}
