<?php

namespace App\Repositories;

use App\Interfaces\IRepositories\ITypeWineRepository;
use App\TypeOfWine;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

/**
 * Репозиторий для работы с сущностью "Тип" вина
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class TypeWineRepository implements ITypeWineRepository
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

    public function getById(int $id): ?TypeOfWine
    {
        return TypeOfWine::find($id);
    }

    public function getPaginatedData(int $size = 6): LengthAwarePaginator
    {
        return TypeOfWine::paginate($size);
    }

    public function createTypeOfWine(array $data): TypeOfWine
    {
        $typeOfWine = new TypeOfWine();
        $typeOfWine->name = $data['name_color'];
        $typeOfWine->save();
        return $typeOfWine;
    }

    public function editTypeWine(TypeOfWine $typeOfWine, array $data): void
    {
        $typeOfWine->name = $data['name_color'];
        $typeOfWine->save();
    }

    function deleteTypeWine(int $id): void
    {
        $typeOfWine = $this->getById($id);
        if ($typeOfWine) {
            $typeOfWine->delete();
        }
    }
}
