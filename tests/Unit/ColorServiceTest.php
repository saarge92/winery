<?php

namespace Tests\Unit;

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
     *
     * @return void
     */
    public function testCreate()
    {
        $colorService = resolve(IColorService::class);
        $createdColor = $colorService->addColor(['name' => $this->faker->name]);
        $this->assertSame($createdColor, true);
    }
}
