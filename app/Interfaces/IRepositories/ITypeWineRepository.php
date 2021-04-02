<?php

namespace App\Interfaces\IRepositories;

use App\TypeOfWine;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

interface ITypeWineRepository
{
    function getTypeNameById(?int $id): ?string;

    function getAll(): Collection;

    function getById(int $id): ?TypeOfWine;

    function getPaginatedData(int $size): LengthAwarePaginator;

    function createTypeOfWine(array $data);

    function editTypeWine(TypeOfWine $typeOfWine, array $data): void;

    function deleteTypeWine(int $id);
}