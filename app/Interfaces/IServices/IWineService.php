<?php

namespace App\Interfaces\IServices;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;

interface IWineService
{
    public function filterWines(array $filter): Collection;

    public function generateListVines(Collection $vines): array;

    public function searchSomeWines(Request $request);

    public function addWine(array $wineForm): bool;

    public function updateWine(array $editWineForm): bool;

    public function deleteWine(int $id): bool;

    public function disableVine(int $id): bool;

    public function enableVine(int $id): bool;
}
