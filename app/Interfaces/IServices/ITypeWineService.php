<?php

namespace App\Interfaces\IServices;

use App\TypeOfWine;
use Illuminate\Pagination\LengthAwarePaginator;

interface ITypeWineService
{
    function getPaginatedData(int $size = 6): LengthAwarePaginator;

    function addTypeWine(array $data): TypeOfWine;

    function getById(int $id): ?TypeOfWine;

    function updateTypeOfWine(int $id, array $data): TypeOfWine;

    function deleteById(int $id): void;
}