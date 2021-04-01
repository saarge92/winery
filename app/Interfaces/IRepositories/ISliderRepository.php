<?php

namespace App\Interfaces\IRepositories;

use App\Slider;
use Illuminate\Pagination\LengthAwarePaginator;

interface ISliderRepository
{
    function addSlider(string $content, string $imagePath, bool $isActive): bool;

    function editSlider(Slider $slider, ?string $content, string $imagePath, bool $isActive): bool;

    function deleteSlider(Slider $slider): bool;

    function getSliderPaginated(): LengthAwarePaginator;

    function getSliderById(int $id): ?Slider;
}
