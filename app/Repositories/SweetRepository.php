<?php

namespace App\Repositories;

use App\Interfaces\IRepositories\ISweetRepository;
use App\Sweet;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

/**
 * Репозиторий для работы с сущностью "Сладость" вина
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class SweetRepository implements ISweetRepository
{
    public function getSweetNameById(int $id): ?string
    {
        $sweet = Sweet::find($id);
        if ($sweet) return $sweet->name;
        return null;
    }

    public function findAll(): Collection
    {
        return Sweet::all();
    }

    public function addSweet(array $data): Sweet
    {
        $sweet = new Sweet();
        $sweet->name = $data['name_sweet'];
        $sweet->save();
        return $sweet;
    }

    public function getPaginatedData(int $size = 6): LengthAwarePaginator
    {
        return Sweet::paginate($size);
    }

    public function getById(int $id): ?Sweet
    {
        return Sweet::find($id);
    }

    public function editSweet(Sweet $sweet, array $data): void
    {
        $sweet->name = $data['name_sweet'];
        $sweet->save();
    }

    /**
     * @param int $id
     * @return bool
     * @throws \Exception
     */
    public function deleteSweet(int $id): bool
    {
        $sweet = $this->getById($id);
        if (!$sweet)
            return false;
        return $sweet->delete();
    }
}
