<?php

namespace App\Repositories;

use App\Sweet;
use Illuminate\Support\Collection;

/**
 * Репозиторий для работы с сущностью "Сладость" вина
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class SweetRepository
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
}
