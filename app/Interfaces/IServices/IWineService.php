<?php

namespace App\Interfaces\IServices;

use Illuminate\Http\Request;
use App\Http\Requests\VinePostRequest;

interface IWineService
{
    public function filterWines(array $filter);
    public function generateListVines($vines): array;
    public function searchSomeWines(Request $request);
    public function addWine(array $wineForm): bool;
    public function updateWine(array $editWineForm): bool;
    public function deleteWine(int $id): bool;
    public function disableVine(int $id): bool;
    public function enableVine(int $id): bool;
}
