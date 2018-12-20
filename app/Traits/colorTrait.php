<?php

namespace App\Traits;

use App\color;

// use Illuminate\Support\Facades\File;

trait colorTrait
{
    public function addColor($req)
    {
        $color = new color();
        $color->name = $req->get('name_color');
        $result = $color->save();
        return $result;
    }
    public function editColorPost($request, $id)
    {
        $color = color::find($id);
        if ($color != null) {
            $color->name = $request->get('name_color');
            $result = $color->save();
            return $result;
        }
        return false;
    }
    public function deleteColor($id)
    {
        $color = color::find($id);
        if (isset($color)) {
            $result = $color->delete();
            return $result;
        }
        return $result;
    }
}
