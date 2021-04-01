<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SweetRequest;
use App\Http\Controllers\Controller;
use App\Sweet;
use App\Traits\SweetTrait;
use Illuminate\Support\Facades\Session;

/**
 * Контроллер для работы со сладостью вин
 * 
 * Предоставляет методы для работы с сущностью "сладость вина"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class SweetController extends Controller
{
    use SweetTrait;

    /** 
    * Получение страницы со списком сладостей
    */
    public function allSweets()
    {
        $sweets = Sweet::paginate(5);
        return view('admin.allSweets')->with('sweets', $sweets);
    }

    /**
    * GET-запрос на получение страницы для создания сладости
    */
    public function startCreateSweet()
    {
        return view('admin.createSweet');
    }

    /**
    * POST-запрос для создания сладости
    * 
    * @param SweetRequest $request - Запрос на создание сладости
    */
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

    /**
    * GET-запрос на получение страницы для редактирования сладости
	* @param Request $request - Запрос на редактирование сладости
	* @param $id - номер сладости
    */
    public function startEditSweet(Request $request, $id)
    {
        $sweet = Sweet::find($id);
        return view('admin.editSweet', ['sweet' => $sweet]);
    }

    /**
     * POST - запрос редактирования сладости
     * 
     * @param SweetRequest $request - Запрос на редактирование сладости
     * @param $id - номер сладости
     */
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

    /**
     * POST-запрос на удаление сладости
     * 
     * @param Request $req - Post-запрос
     * @param $id - номер сладости
     */
    public function dropSweet(Request $req, $id)
    {
        $this->deleteSweet($id) == true ? Session::flash('success', 'Запись успешно удалена')
            : Session::flash('error', 'Ошибка при удалении');
        return redirect('allSweets');
    }
}
