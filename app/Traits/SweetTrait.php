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
trait SweetTrait
{
    public function addSweet(Request $req): bool
    {
        $sweet = new Sweet();
        $sweet->name = $req->get('name_sweet');
        return $sweet->save();
    }

    public function editSweetPost(Request $request, int $id): bool
    {
        $sweet = Sweet::find($id);
        if ($sweet != null) {
            $sweet->name = $request->get('name_sweet');
            return $sweet->save();
        }
        return false;
    }

    public function deleteSweet(int $id): bool
    {
        $sweet = Sweet::find($id);
        if (isset($sweet)) {
            return $sweet->delete();
        }
        return false;
    }
}
