<?php

namespace App\Interfaces\IServices;

use App\Vine;
use Illuminate\Http\Request;


interface IWineService
{
    function filterWines(array $filter): object;

    function generateListVines($vines): array;

    function searchSomeWines(Request $request);

    function addWine(array $wineForm): bool;

    function updateWine(array $editWineForm): bool;

    function deleteWine(int $id): bool;

    function disableVine(int $id): bool;

    function enableVine(int $id): bool;

    function getWineById(int $id): ?Vine;
}
