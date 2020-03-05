<?php

namespace Tests\Unit;

use App\Interfaces\IServices\ISliderService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

/**
 * Тестирование функционала SliderService
 *
 * @package Tests\Unit
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class SliderServiceTest extends TestCase
{
    use WithFaker;

    /**
     * Тестирование создания слайдера в базе
     * Тестирование метода createSlider
     */
    public function testCreateSlider()
    {
        $sliderService = $this->getSliderService();
        $createParams = [
            'content' => $this->faker->text,
            'src_image' => UploadedFile::fake()->image('sliders/wine1.jpg'),
            'is_active' => true
        ];
        $isCreated = $sliderService->createSlider($createParams);
        $this->assertSame($isCreated, true);
    }

    private function getSliderService(): ISliderService
    {
        return resolve(ISliderService::class);
    }


}
