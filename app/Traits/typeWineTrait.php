<?php

namespace App\Traits;

use App\type_of_wine;

trait typeWineTrait
{
    public function addTypeWine($req)
    {
        $tw = new type_of_wine();
        $tw->name = $req->get('name_color');
        $result = $tw->save();
        return $result;
    }
    public function editTypeWine($request, $id)
    {
        $tw = type_of_wine::find($id);
        if ($tw != null) {
            $tw->name = $request->get('name_color');
            $result = $tw->save();
            return $result;
        }
        return false;
    }
    public function deleteTypeWine($id)
    {
        $tw = type_of_wine::find($id);
        if (isset($tw)) {
            $result = $tw->delete();
            return $result;
        }
        return $result;
    }
}
