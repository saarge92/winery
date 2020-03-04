<?php

namespace Tests\Unit;

use App\color;
use App\Interfaces\IServices\IColorService;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

/**
 * Тестирование сервиса по созданию цветов вина в базе
 *
 * @package Tests\Unit
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class ColorServiceTest extends TestCase
{
    use WithFaker;

    /**
     * Тестирование создания цвета в базе
     * Тестирование метода addColor
     */
    public function testCreate()
    {
        $colorService = resolve(IColorService::class);
        $createdColor = $colorService->addColor(['name' => $this->faker->name]);
        $this->assertSame($createdColor, true);
    }

    /**
     * Тестирование редактирования цвета вина в базе по id
     * Тестирование метода editColor
     */
    public function testEditColor()
    {
        $colorService = resolve(IColorService::class);
        $randomColor = color::orderByRaw("RAND()")->first();
        $editedColor = $colorService->editColor(['name_color' => $this->faker->name], $randomColor['id']);
        $this->assertSame($editedColor, true);
    }

    /**
     * Тестирование редактирование цвета
     * Тестирование deleteColor
     */
    public function testDeleteColor()
    {
        $colorService = resolve(IColorService::class);
        $randomColor = color::orderByRaw("RAND()")->first();
        $isDeletedColor = $colorService->deleteColor($randomColor['id']);
        $this->assertSame($isDeletedColor, true);
    }
}
