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
        $priority = $req->get('priority');
        if(isset($priority))
        {
            $color->priority = $priority;
        }
        else
        {
            $priority_max = color::max('priority') + 1;
            $color->priority = $priority_max;
        }
        $result = $color->save();
        return $result;
    }
    public function editColorPost($request, $id)
    {
        $color = color::find($id);
        if ($color!=null) {
            $color->name = $request->get('name_color');
            $priority = $request->get('priority');
            if(isset($priority))
            {
                $color->priority = $priority;
            }
            else
            {
                $priority_max = color::max('priority') + 1;
                $color->priority = $priority_max;
            }
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
