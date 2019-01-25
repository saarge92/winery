<?php

namespace App\Traits;

use App\producer;
use Illuminate\Http\Request;

/**
 * Trait для работы с производителями вин
 * 
 * Trait содержит базовые операции с сущностью "Проивзодитель вин"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
trait producerTrait
{
    /**
     * Добавление производитель вина
     * 
     * @param Request $req - список параметров
     * @return bool $result - Добавлено ли производитель
     */
    public function addProducer(Request $req) : bool
    {
        $producer = new producer();
        $producer->name = $req->get('name_producer');
        $result = $producer->save();
        return $result;
    }

    /**
     * Редактирование производителя вина
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер производителя
     * @return bool $result - Редактирован ли производитель
     */
    public function editProducerPost(Request $request, int $id) : bool
    {
        $producer = producer::find($id);
        if ($producer != null) {
            $producer->name = $request->get('name_producer');
            $result = $producer->save();
            return $result;
        }
        return false;
    }

    /**
     * Удаление производителя вина
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер производителя
     * @return bool $result - Редактировано ли тип проивзодитель
     */
    public function deleteProducer(int $id) : bool
    {
        $producer = producer::find($id);
        if (isset($producer)) {
            $result = $producer->delete();
            return $result;
        }
        return $result;
    }
}
