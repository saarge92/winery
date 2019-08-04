<?php

namespace App\Repositories;

use App\type_of_wine;

class TypeWineRepository
{
    public function getTypeNameById(?int $id): ?string
    {
        $typeWine = type_of_wine::find($id);
        if ($typeWine) return $typeWine->name;
        return null;
    }
}
