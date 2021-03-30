<?php

namespace App\Interfaces\IRepositories;

use App\Color;
use Illuminate\Support\Collection;

interface IColorRepository
{
    public function getColorNameById(int $id): ?string;

    public function getPriorityColorById(int $id): ?string;

    public function addColor(string $name): bool;

    public function editColor(Color &$color, string $name): bool;

    public function deleteColor(Color $color): bool;

    public function getAllColors(): Collection;
}
