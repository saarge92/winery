<?php

namespace App\Repositories;

use App\Slider;
use App\Interfaces\IRepositories\ISliderRepository;
use Illuminate\Support\Collection;


/**
 * Репозиторий для работы с сущностью "Слайдер"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class SliderRepository implements ISliderRepository
{
    public function addSlider(string $content, string $imagePath, bool $isActive): bool
    {
        $slider = new Slider();
        $slider->content = $content;
        $slider->src_image = $imagePath;
        $slider->is_active = $isActive;
        return $slider->save();
    }

    public function editSlider(Slider $slider, string $content, string $imagePath, bool $isActive): bool
    {
        $slider->content = $content;
        $slider->src_image = $imagePath;
        $slider->is_active = $isActive;
        return $slider->save();
    }

    public function deleteSlider(Slider $slider): bool
    {
        return $slider->delete();
    }

    public function getSliderPaginated(): Collection
    {
        return Slider::paginate(6);
    }
}
