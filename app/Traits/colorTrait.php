<?php

namespace App\Traits;

use App\color;
use Illuminate\Http\Request;

/**
 * Trait для работы с сущностью "цвет вин"
 * 
 * Trait содержит базовые операции с сущностью "Цвет вина"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
trait colorTrait
{
    /**
     * Добавление цвета вин
     * 
     * @param Request $req - список параметров
     * @return bool $result - Добавлен ли цвет
     */
    public function addColor(Request $req) : bool
    {
        $color = new color();
        $color->name = $req->get('name_color');
        $result = $color->save();
        return $result;
    }

    /**
     * Редактирование цвета
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер цвета
     * @return bool $result - Редактирован ли цвет
     */
    public function editColorPost(Request $request, int $id) : bool
    {
        $color = color::find($id);
        if ($color != null) {
            $color->name = $request->get('name_color');
            $result = $color->save();
            return $result;
        }
        return false;
    }

    /**
     * Удаление цвета вина
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер вина
     * @return bool $result - Редактировано ли вино
     */
    public function deleteColor($id) : bool
    {
        $color = color::find($id);
        if (isset($color)) {
            $result = $color->delete();
            return $result;
        }
        return $result;
    }
}
