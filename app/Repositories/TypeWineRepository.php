<?php

namespace App\Repositories;

use App\TypeOfWine;
use Illuminate\Support\Collection;

/**
 * Репозиторий для работы с сущностью "Тип" вина
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class TypeWineRepository
{
    public function getTypeNameById(?int $id): ?string
    {
        $typeWine = TypeOfWine::find($id);
        if ($typeWine) return $typeWine->name;
        return null;
    }

    public function getAll(): Collection
    {
        return TypeOfWine::all();
    }
}
