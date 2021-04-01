<?php

namespace App\Interfaces\IRepositories;

use App\Slider;
use Illuminate\Support\Collection;

interface ISliderRepository
{
    public function addSlider(string $content, string $imagePath, bool $isActive): bool;

    public function editSlider(Slider $slider, string $content, string $imagePath, bool $isActive): bool;

    public function deleteSlider(Slider $slider): bool;

    public function getSliderPaginated(): Collection;
}
