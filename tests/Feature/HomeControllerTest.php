<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Vine;

class HomeControllerTest extends TestCase
{
    /**
     * Тестирование стартовой страницы
     *
     * @return void
     */
    public function testIndex()
    {
        $this->call('GET', '/')->assertSee('Вино')
            ->assertSessionHas('paginate_number');
    }

    /**
     * Тестирование получения количества выбранных вин
     *
     * @return void
     */
    public function testCountChoice()
    {
        $this->call('POST', '/getCountOfChoice')->assertOk();
    }

    /**
     * Тестирование отображения вина
     *
     * @return void
     */
    public function testViewWine()
    {
        $wine = Vine::inRandomOrder()->first();
        $this->call('GET', "/viewWine/" . $wine->id)
            ->assertOk();
    }

    /**
     * Тестирование автозаполнения
     *
     * @return void
     */
    public function testAutocomplete()
    {
        $this->call('GET', '/autocomplete')->assertJsonStructure([
            "wines" => [[
                'id',
                'name_rus'
            ]]
        ]);
    }
}
