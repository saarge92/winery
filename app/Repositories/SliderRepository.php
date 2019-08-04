<?php

namespace App\Repositories;

use App\slider;
use App\Interfaces\IRepositories\ISliderRepository;


/**
 * Репозиторий для работы с сущностью "Слайдер"
 */
class SliderRepository implements ISliderRepository
{
    public function addSlider(string $content, string $imagePath, bool $isActive): bool
    {
        $slider = new slider();
        $slider->content = $content;
        $slider->src_image = $imagePath;
        $slider->is_active = $isActive;
        return $slider->save();
    }

    public function editSlider(slider $slider, string $content, string $imagePath, bool $isActive): bool
    {
        $slider->content = $content;
        $slider->src_image = $imagePath;
        $slider->is_active = $isActive;
        return $slider->save();
    }

    public function deleteSlider(slider $slider): bool
    {
        return $slider->delete();
    }
}
