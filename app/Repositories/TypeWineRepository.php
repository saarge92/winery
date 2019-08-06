<?php

namespace App\Repositories;

use App\type_of_wine;

/**
 * Репозиторий для работы с сущностью "Тип" вина
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class TypeWineRepository
{
    /**
     * Получение название типа вина
     * 
     *  @param int $id - Id типа
     * @return string Название типа
     */
    public function getTypeNameById(?int $id): ?string
    {
        $typeWine = type_of_wine::find($id);
        if ($typeWine) return $typeWine->name;
        return null;
    }
}
