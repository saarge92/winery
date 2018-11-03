<?php

namespace App\Traits;

use App\sweet;

// use Illuminate\Support\Facades\File;

trait sweetTrait
{
    public function addSweet($req)
    {
        $sweet = new sweet();
        $sweet->name = $req->get('name_sweet');
        $result = $sweet->save();
        return $result;
    }
    public function editSweetPost($request, $id)
    {
        $sweet = sweet::find($id);
        if ($sweet!=null) {
            $sweet->name = $request->get('name_sweet');
            $result = $sweet->save();
            return $result;
        }
        return false;
    }
    public function deleteSweet($id)
    {
        $sweet = sweet::find($id);
        if (isset($sweet)) {
            $result = $sweet->delete();
            return $result;
        }
        return $result;
    }
}
