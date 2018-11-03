<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ColorRequest;
use App\Http\Controllers\Controller;
use App\color;
use App\Traits\colorTrait;
use Illuminate\Support\Facades\Session;
class ColorController extends Controller
{
    use colorTrait;
    public function allColors()
    {
        $colors = color::paginate(5);
        return view('admin.allColors')->with('colors',$colors);
    }
    public function startCreateColor()
    {
        return view('admin.createColor');
    }
    public function createColor(ColorRequest $request)
    {
        if ($request->validated()) {
            $result = $this->addColor($request);
            $result == true ? Session::flash('success', 'Цвет  успешно '.$request->get('name_rus').' успешно обновлено')
                : Session::flash('error', 'Произошла ошибка,повторите попытку снова!');
            return redirect('allColors');
        }
        return redirect()->back();
    }
    public function startEditColor(Request $request, $id)
    {
        $color = color::find($id);
        return view('admin.editColor', ['color'=>$color]);
    }
    public function editColor(ColorRequest $request, $id)
    {
        if ($request->validated()) {
            $result = $this->editColorPost($request, $id);
            $result == true ? Session::flash('success', 'Цвет '.$request->get('name_color').' успешно обновлен')
                : Session::flash('error', 'Произошла ошибка!');
            return redirect('allColors');
        }
        return redirect()->back();
    }
    public function dropColor(Request $req, $id)
    {
        $this->deleteColor($id) == true ? Session::flash('success', 'Цвет успешно удален')
        : Session::flash('error', 'Ошибка при удалении');
        return redirect('allColors');
    }
}
