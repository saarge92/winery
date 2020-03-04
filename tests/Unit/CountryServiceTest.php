<?php

namespace Tests\Unit;

use App\country;
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
        $countryService = resolve(ICountryService::class);
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
        $countryService = resolve(ICountryService::class);
        $randomCountry = country::orderByRaw("RAND()")->first();
        $editParams = [
            'name_rus' => $this->faker->country,
            'name_en' => $this->faker->country
        ];
        $isEdited = $countryService->editCountryPost($editParams, $randomCountry['id']);
        $this->assertSame($isEdited, true);
    }
}
