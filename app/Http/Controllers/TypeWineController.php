<?php

namespace App\Http\Controllers;

use App\Interfaces\IServices\ITypeWineService;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\ColorRequest;


/**
 * Контроллер для работы с типом вин
 *
 * Предоставляет методы для работы с сущностью "тип вина"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class TypeWineController extends Controller
{
    private ITypeWineService $typeWineService;

    public function __construct(ITypeWineService $typeWineService)
    {
        $this->typeWineService = $typeWineService;
    }

    public function index()
    {
        $typeWines = $this->typeWineService->getPaginatedData();
        return view('admin.all_types', ['types_of_wines' => $typeWines]);
    }

    public function getCreate()
    {
        return view('admin.createTypeWine');
    }

    public function createTypeWine(ColorRequest $request)
    {
        if ($request->validated()) {
            if ($request->validated()) {
                $this->typeWineService->addTypeWine($request->all());
                Session::flash('success', 'Тип вина успешно добавлен');
                return redirect('all_types');
            }
            return redirect()->back();
        }
    }


    public function getEditType(int $id)
    {
        $tw = $this->typeWineService->getById($id);
        return view('admin.editType', ['tw' => $tw]);
    }

    public function editType(ColorRequest $request, $id)
    {
        if ($request->validated()) {
            $this->typeWineService->updateTypeOfWine($id, $request->all());
            Session::flash('success', 'Тип вина успешно обновлен');
            return redirect('all_types');
        }
        return redirect()->back();
    }

    public function dropType(int $id): \Illuminate\Http\RedirectResponse
    {
        $this->typeWineService->deleteById($id);
        Session::flash('success', 'Тип вина успешно удален');
        return redirect()->back();
    }
}
