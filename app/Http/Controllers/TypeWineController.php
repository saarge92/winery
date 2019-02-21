<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\type_of_wine;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\ColorRequest;
use App\Traits\typeWineTrait;

/**
 * Контроллер для работы с типом вин
 * 
 * Предоставляет методы для работы с сущностью "тип вина"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
class TypeWineController extends Controller
{
    use typeWineTrait;

    /** 
    * Получение страницы со списком типов вин
    */
    public function index()
    {
        $types_of_wines = type_of_wine::paginate(6);
        return view('admin.all_types', compact('types_of_wines'));
    }

    /**
    * GET-запрос на получение страницы для создания производителя
    */
    public function getCreate()
    {
        return view('admin.createTypeWine');
    }

    /**
    * POST-запрос для создания производителя
    * 
    * @param ColorRequest $request - Запрос на создание типа вина
    */
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

    /**
    * GET-запрос на получение страницы для редактирования типа вина
	* @param Request $request - Запрос на редактирование типа вина
	* @param $id - номер типа
    */
    public function getEditType($id)
    {
        $tw = type_of_wine::find($id);
        return view('admin.editType', ['tw' => $tw]);
    }

    /**
     * POST - запрос редактирования производителя
     * 
     * @param ColorRequest $request - Запрос на редактирование типа
     * @param $id - номер типа
     */
    public function editType(ColorRequest $request, $id)
    {
        if ($request->validated()) {
            $result = $this->editTypeWine($request, $id);
            $result == true ? Session::flash('success', 'Тип вина успешно обновлен')
                : Session::flash('error', 'Произошла ошибка,повторите попытку снова!');
            return redirect('all_types');
        }
    }

    /**
     * POST-запрос на удаление типа
     * 
     * @param Request $req - Post-запрос
     * @param $id - номер типа
     */
    public function dropType($id)
    {
        $this->deleteTypeWine($id) == true ? Session::flash('success', 'Тип вина успешно удален')
            : Session::flash('error', 'Ошибка при удалении');
        return redirect()->back();
    }
}
