<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\type_of_wine;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\ColorRequest;
use App\Traits\typeWineTrait;

class TypeWineController extends Controller
{
    use typeWineTrait;
    public function index()
    {
        $types_of_wines = type_of_wine::paginate(6);
        return view('admin.all_types', compact('types_of_wines'));
    }
    public function getCreate()
    {
        return view('admin.createTypeWine');
    }
    public function createTypeWine(ColorRequest $request)
    {
        if ($request->validated()) {
            if ($request->validated()) {
                $result = $this->addTypeWine($request);
                $result == true ? Session::flash('success', 'Тип вина успешно добавлен')
                    : Session::flash('error', 'Произошла ошибка,повторите попытку снова!');
                return redirect('all_types');
            }
            return redirect()->back();
        }
    }
    public function getEditType($id)
    {
        $tw = type_of_wine::find($id);
        return view('admin.editType', ['tw' => $tw]);
    }
    public function editType(ColorRequest $request, $id)
    {
        if ($request->validated()) {
            $result = $this->editTypeWine($request, $id);
            $result == true ? Session::flash('success', 'Тип вина успешно обновлен')
                : Session::flash('error', 'Произошла ошибка,повторите попытку снова!');
            return redirect('all_types');
        }
    }
    public function dropType($id)
    {
        $this->deleteTypeWine($id) == true ? Session::flash('success', 'Тип вина успешно удален')
            : Session::flash('error', 'Ошибка при удалении');
        return redirect()->back();
    }
}
