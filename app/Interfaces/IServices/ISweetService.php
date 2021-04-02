<?php

namespace App\Interfaces\IServices;

use App\Sweet;
use Illuminate\Pagination\LengthAwarePaginator;

interface ISweetService
{
    function addSweet(array $data): Sweet;

    function getPaginated(int $size = 6): LengthAwarePaginator;

    function getById(int $id): ?Sweet;

    function editById(int $id, array $data): Sweet;

    function deleteById(int $id): bool;
}