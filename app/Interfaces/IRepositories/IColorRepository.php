<?php

namespace App\Interfaces\IRepositories;

use App\color;

interface IColorRepository
{
    public function getColorNameById(int $id): ?string;
    public function getPriorityColorById(int $id): ?string;
    public function addColor(string $name): bool;
    public function editColor(color &$color, string $name): bool;
    public function deleteColor(color $color) : bool;
}
