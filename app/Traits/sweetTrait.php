<?php

namespace App\Traits;

use App\Sweet;
use Illuminate\Http\Request;

/**
 * Trait для работы со сладостью вин
 * 
 * Trait содержит базовые операции с сущностью "Сладость вина"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
trait sweetTrait
{
    /**
     * Добавление сладости вина
     * 
     * @param Request $req - список параметров
     * @return bool $result - Добавлено ли производитель
     */
    public function addSweet(Request $req) : bool
    {
        $sweet = new Sweet();
        $sweet->name = $req->get('name_sweet');
        $result = $sweet->save();
        return $result;
    }

    /**
     * Редактирование сладости вин
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер производителя
     * @return bool $result - Редактирована ли запись
     */
    public function editSweetPost(Request $request, int $id) : bool
    {
        $sweet = Sweet::find($id);
        if ($sweet != null) {
            $sweet->name = $request->get('name_sweet');
            $result = $sweet->save();
            return $result;
        }
        return false;
    }

    /**
     * Удаление сладости вина
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер записи
     * @return bool $result - Редактирована ли запись
     */
    public function deleteSweet(int $id)
    {
        $sweet = Sweet::find($id);
        if (isset($sweet)) {
            $result = $sweet->delete();
            return $result;
        }
        return $result;
    }
}
