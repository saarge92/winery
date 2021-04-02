<?php

namespace App\Http\Controllers;

use App\Interfaces\IServices\ISweetService;
use App\Http\Requests\SweetRequest;
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

    private ISweetService $sweetService;

    public function __construct(ISweetService $sweetService)
    {
        $this->sweetService = $sweetService;
    }

    public function allSweets()
    {
        $sweets = $this->sweetService->getPaginated();
        return view('admin.allSweets')->with('sweets', $sweets);
    }

    public function startCreateSweet()
    {
        return view('admin.createSweet');
    }

    public function createSweet(SweetRequest $request)
    {
        if ($request->validated()) {
            $this->sweetService->addSweet($request->all());
            Session::flash('success', 'Запись успешно добавлена');
            return redirect('allSweets');
        }
        return redirect()->back();
    }

    public function startEditSweet(int $id)
    {
        $sweet = $this->sweetService->getById($id);
        return view('admin.editSweet', ['sweet' => $sweet]);
    }


    public function editSweet(SweetRequest $request, $id)
    {
        if ($request->validated()) {
            $this->sweetService->editById($id, $request->all());
            Session::flash('success', 'Запись успешно обновлена');
            return redirect('allSweets');
        }
        return redirect()->back();
    }


    public function dropSweet(int $id)
    {
        $this->sweetService->deleteById($id);
        Session::flash('success', 'Запись успешно удалена');
        return redirect('allSweets');
    }
}
