<?php

namespace App\Interfaces\IRepositories;

use App\Color;
use Illuminate\Support\Collection;

interface IColorRepository
{
    function getColorNameById(int $id): ?string;

    function getPriorityColorById(int $id): ?string;

    function addColor(string $name): bool;

    function editColor(Color &$color, string $name): bool;

    function deleteColor(Color $color): bool;

    function getAllColors(): Collection;

    function getById(int $id): ?Color;
}
