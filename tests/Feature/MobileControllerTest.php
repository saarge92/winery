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
    public function testAllTypes() : void
    {
        $this->json('GET', '/api/get-all-types')
            ->assertStatus(200)->assertJsonFragment([
                "id" => 2,
                "name" => "Десертное",
                "created_at" => "2018-11-13 19:38:57",
                "updated_at" => "2018-11-29 20:12:26"
            ]);
    }

    public function testAllSweets() : void
    {
        $this->json('GET','api/get-all-sweets')
        ->assertJsonStructure([[
            "id",
            'name',
            'created_at',
            'updated_at'
        ]]);
    }

    public function testAllProducers() : void
    {
        $this->json('GET','api/get-all-producers')
        ->assertOk();
    }

    public function testAllCountries() :void
    {
        $this->json('GET','api/get-all-countries')
        ->assertJsonMissing([
            'id' => 'somestring'
        ]);
    }

    public function testAllColors() :void
    {
        $count = Color::count();
        $this->json('GET','api/get-all-colors')
        ->assertJsonCount($count);
    }

    public function testMinAndMaxPrice() :void
    {
        $minPrice = Vine::min('price');
        $maxPrice = Vine::max('price');
        $this->get('/api/get-min-price')->assertSee($minPrice);
        $this->get('/api/get-max-price')->assertSee($maxPrice);
    }

    public function testRequestedWines()
    {
        $count = count($this->json('POST','/api/get-requested-wines')->decodeResponseJson());
        $this->assertEquals(true,$count<=12);
    }
}   
