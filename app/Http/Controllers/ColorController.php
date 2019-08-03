<?php

namespace App\Http\Controllers;

use App\color;
use App\Traits\colorTrait;
use Illuminate\Http\Request;
use App\Http\Requests\ColorRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use App\Interfaces\IServices\IColorService;

/**
 * Контроллер для работы цветом вин в кабинете администратора
 * 
 * Предоставляет методы для работы с сущностью "цвета вин"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
class ColorController extends Controller
{
    private $colorService;

    public function __construct(IColorService $colorService)
    {
        $this->colorService = $colorService;
    }

    /**
     * Генерирует страницу с цветами вин
     */
    public function allColors()
    {
        $colors = color::orderby('priority', 'asc')->paginate(5);
        return view('admin.allColors')->with('colors', $colors);
    }

    /**
     * Генерирует страницу для создания цвета
     */
    public function startCreateColor()
    {
        return view('admin.createColor');
    }

    /**
     * Обработка POST-запроса для создания цвета
     * 
     * @param ColorRequest $request - Класс-запрос с параметрами цвета
     */
    public function createColor(ColorRequest $request)
    {
        if ($request->validated()) {
            $result = $this->colorService->addColor($request);
            $result ? Session::flash('success', 'Цвет успешно добавлен')
                : Session::flash('error', 'Произошла ошибка,повторите попытку снова!');
            return redirect('allColors');
        }
        return redirect()->back();
    }

    /**
     * Генерация страницы с редактирование цвета
     * 
     * @param Request $request - запрос с параметрами
     * @param mixed $id - id цвета 
     */
    public function startEditColor(Request $request, $id)
    {
        $color = color::find($id);
        return view('admin.editColor', ['color' => $color]);
    }

    /**
     * POST-запрос на редактирование цвета
     * 
     * @param Request $request - запрос с параметрами
     * @param mixed $id - id цвета 
     */
    public function editColor(ColorRequest $request, $id)
    {
        if ($request->validated()) {
            $edited = $this->colorService->editColor($request, $id);
            $edited ? Session::flash('success', 'Цвет успешно обновлен')
                : Session::flash('error', 'Произошла ошибка!');
            return redirect('allColors');
        }
        return redirect()->back();
    }

    /**
     * POST-запрос на удаление цвета
     * 
     * @param Request $request - запрос с параметрами
     * @param mixed $id - id цвета 
     */
    public function dropColor(int $id)
    {
        $this->colorService->deleteColor($id) == true ? Session::flash('success', 'Цвет успешно удален')
            : Session::flash('error', 'Ошибка при удалении');
        return redirect('allColors');
    }
}
