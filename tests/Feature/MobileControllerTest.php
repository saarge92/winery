<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\color;
use App\vine;

/**
 * Тестирование методов api для мобильного приложения
 * 
 * @author Serdar Durdyev
 * @copyright BarHouse 2019
 */
class MobileControllerTest extends TestCase
{
    /**
     * Получение списка типов вина
     *
     * @return void
     */
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

    /**
     * Тестирование списка сладостей
     * 
     * @return void
     */
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

    /**
     * Тестирование списка производителей
     * 
     * @return void
     */
    public function testAllProducers() : void
    {
        $this->json('GET','api/get-all-producers')
        ->assertOk();
    }

    /**
     * Тестирование списка стран
     * 
     * @return void
     */
    public function testAllCountries() :void
    {
        $this->json('GET','api/get-all-countries')
        ->assertJsonMissing([
            'id' => 'somestring'
        ]);
    }

    /**
     * Тестирование списка цветов
     * 
     * @return void
     */
    public function testAllColors() :void
    {
        $count = color::count();
        $this->json('GET','api/get-all-colors')
        ->assertJsonCount($count);
    }

    /**
     * Тестирование минимальных и максимальных цен
     * 
     * @return void
     */
    public function testMinAndMaxPrice() :void
    {
        $minPrice = vine::min('price');
        $maxPrice = vine::max('price');
        $this->get('/api/get-min-price')->assertSee($minPrice);
        $this->get('/api/get-max-price')->assertSee($maxPrice);
    }

    /**
     * Тестирование пагинированных вин
     * 
     * @return void
     */
    public function testRequestedWines()
    {
        $count = count($this->json('POST','/api/get-requested-wines')->decodeResponseJson());
        $this->assertEquals(true,$count<=12);
    }
}   
