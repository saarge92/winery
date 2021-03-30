<?php

namespace App\Interfaces\IRepositories;

use App\Slider;


/**
 * Интерфейс для работы репозитория, осуществляющий операции с сущностью "Slider"
 */
interface ISliderRepository
{
    public function addSlider(string $content, string $imagePath, bool $isActive): bool;
    public function editSlider(Slider $slider, string $content, string $imagePath, bool $isActive): bool;
    public function deleteSlider(Slider $slider): bool;
}
