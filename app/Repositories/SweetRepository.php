<?php

namespace App\Repositories;

use App\sweet;

/**
 * Репозиторий для работы с сущностью "Сладость" вина
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class SweetRepository
{
    /**
     * Получить название сладости вина по его Id
     * 
     * @param int $id - Id сладости
     * @return string Название сладости
     */
    public function getSweetNameById(int $id): ?string
    {
        $sweet = sweet::find($id);
        if ($sweet) return $sweet->name;
        return null;
    }
}
