<?php

namespace App\Interfaces\IRepositories;

use App\Sweet;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

interface ISweetRepository
{
    function addSweet(array $data): Sweet;

    function getPaginatedData(int $size): LengthAwarePaginator;

    function getById(int $id): ?Sweet;

    function editSweet(Sweet $sweet, array $data);

    function getSweetNameById(int $id): ?string;

    function findAll(): Collection;

    function deleteSweet(int $id): bool;
}