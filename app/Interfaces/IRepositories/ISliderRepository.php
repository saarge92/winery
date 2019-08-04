<?php

namespace App\Interfaces\IRepositories;

use App\slider;


/**
 * Интерфейс для работы репозитория, осуществляющий операции с сущностью "Slider"
 */
interface ISliderRepository
{
    public function addSlider(string $content, string $imagePath, bool $isActive): bool;
    public function editSlider(slider $slider, string $content, string $imagePath, bool $isActive): bool;
    public function deleteSlider(slider $slider): bool;
}
