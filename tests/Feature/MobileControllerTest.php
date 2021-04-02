<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Color;
use App\Vine;

/**
 * Тестирование методов api для мобильного приложения
 *
 * @author Serdar Durdyev
 * @copyright BarHouse 2019
 */
class MobileControllerTest extends TestCase
{
    public function testAllTypes(): void
    {
        $this->json('GET', '/api/types')
            ->assertStatus(200)->assertJsonStructure([[
                "id",
                "name",
                "created_at",
                "updated_at"
            ]]);
    }

    public function testAllSweets(): void
    {
        $this->json('GET', 'api/sweets')
            ->assertJsonStructure([[
                "id",
                'name',
                'created_at',
                'updated_at'
            ]]);
    }

    public function testAllProducers(): void
    {
        $this->json('GET', 'api/producers')
            ->assertOk();
    }

    public function testAllCountries(): void
    {
        $this->json('GET', 'api/get-all-countries')
            ->assertJsonMissing([
                'id' => 'somestring'
            ]);
    }

    public function testAllColors(): void
    {
        $count = Color::count();
        $this->json('GET', 'api/colors')
            ->assertJsonCount($count);
    }

    public function testMinAndMaxPrice(): void
    {
        $minPrice = Vine::min('price');
        $maxPrice = Vine::max('price');
        $this->get('/api/price/max')->assertSee($minPrice);
        $this->get('/api/price/min')->assertSee($maxPrice);
    }

    public function testRequestedWines()
    {
        $count = count($this->json('POST', '/api/get-requested-wines')->decodeResponseJson());
        $this->assertEquals(true, $count <= 12);
    }
}   
