<?php

namespace App\Traits;

use App\type_of_wine;
use Illuminate\Http\Request;

/**
 * Trait для работы с типами вин
 * 
 * Trait содержит базовые операции с сущностью "Тип вина"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
trait typeWineTrait
{
    /**
     * Добавление "типа" вина
     * 
     * @param Request $req - список параметров
     * @return bool $result - Добавлено ли тип вина
     */
    public function addTypeWine(Request $req) : bool
    {
        $tw = new type_of_wine();
        $tw->name = $req->get('name_color');
        $result = $tw->save();
        return $result;
    }

    /**
     * Редактирование вина
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер вина
     * @return bool $result - Редактирован ли тип вина
     */
    public function editTypeWine(Request $request, int $id) : bool
    {
        $tw = type_of_wine::find($id);
        if ($tw != null) {
            $tw->name = $request->get('name_color');
            $result = $tw->save();
            return $result;
        }
        return false;
    }
    
    /**
     * Удаление "типа" вина
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер вина
     * @return bool $result - Редактировано ли тип вина
     */
    public function deleteTypeWine(int $id) : bool
    {
        $tw = type_of_wine::find($id);
        if (isset($tw)) {
            $result = $tw->delete();
            return $result;
        }
        return $result;
    }
}
