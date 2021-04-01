<?php

namespace App\Traits;

use App\TypeOfWine;
use Illuminate\Http\Request;

/**
 * Trait для работы с типами вин
 *
 * Trait содержит базовые операции с сущностью "Тип вина"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
trait TypeWineTrait
{
    public function addTypeWine(Request $req): bool
    {
        $tw = new TypeOfWine();
        $tw->name = $req->get('name_color');
        return $tw->save();
    }

    public function editTypeWine(Request $request, int $id): bool
    {
        $tw = TypeOfWine::find($id);
        if ($tw != null) {
            $tw->name = $request->get('name_color');
            return $tw->save();
        }
        return false;
    }

    public function deleteTypeWine(int $id): bool
    {
        $tw = TypeOfWine::find($id);
        if (isset($tw)) {
            return $tw->delete();
        }
        return false;
    }
}
