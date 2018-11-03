<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SweetRequest;
use App\Http\Controllers\Controller;
use App\sweet;
use App\Traits\sweetTrait;
use Illuminate\Support\Facades\Session;

class SweetController extends Controller
{
    use sweetTrait;
    public function allSweets()
    {
        $sweets = sweet::paginate(5);
        return view('admin.allSweets')->with('sweets', $sweets);
    }
    public function startCreateSweet()
    {
        return view('admin.createSweet');
    }
    public function createSweet(SweetRequest $request)
    {
        if ($request->validated()) {
            $result = $this->addSweet($request);
            $result == true ? Session::flash('success', 'Запись успешно добавлена')
                : Session::flash('error', 'Произошла ошибка,повторите попытку снова!');
            return redirect('allSweets');
        }
        return redirect()->back();
    }
    public function startEditSweet(Request $request, $id)
    {
        $sweet = sweet::find($id);
        return view('admin.editSweet', ['sweet'=>$sweet]);
    }
    public function editSweet(SweetRequest $request, $id)
    {
        if ($request->validated()) {
            $result = $this->editSweetPost($request, $id);
            $result == true ? Session::flash('success', 'Запись успешно обновлена')
                : Session::flash('error', 'Произошла ошибка!');
            return redirect('allSweets');
        }
        return redirect()->back();
    }
    public function dropSweet(Request $req, $id)
    {
        $this->deleteSweet($id) == true ? Session::flash('success', 'Запись успешно удалена')
        : Session::flash('error', 'Ошибка при удалении');
        return redirect('allSweets');
    }
}
