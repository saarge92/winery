<?php

namespace App\Interfaces\IServices;

use Illuminate\Http\Request;

interface IWineService
{
    public function filterWines(array $filter);
    public function generateListVines($vines): array;
    public function searchSomeWines(Request $request);
}
