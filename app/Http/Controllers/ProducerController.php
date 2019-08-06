<?php

namespace App\Http\Controllers;

use App\producer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProducerRequest;
use Illuminate\Support\Facades\Session;
use App\Interfaces\IServices\IProducerService;

/**
 * Контроллер для работы с производителями вин в кабинете администратора
 * 
 * Предоставляет методы для работы с сущностью "производитель вин"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class ProducerController extends Controller
{
    private $producerService;

    public function __construct(IProducerService $producerService)
    {
        $this->producerService = $producerService;
    }
    /** 
     * Получение страницы со списком производителей
     */
    public function getProducers()
    {
        $producers = producer::orderby('name', 'asc')->paginate(6);
        return view('admin.producers', ['producers' => $producers]);
    }

    /**
     * GET-запрос на получение страницы для создания производителя
     */
    public function startCreateProducer()
    {
        return view('admin.createProducer');
    }

    /**
     * POST-запрос для создания производителя
     * 
     * @param ProducerRequest $request - Запрос на создание производителя
     */
    public function createProducer(ProducerRequest $request)
    {
        if ($request->validated()) {
            $result = $this->producerService->createProducer($request);
            $result ? Session::flash('success', 'Страна ' . $request->get('name_rus') . ' успешно обновлено')
                : Session::flash('error', 'Произошла ошибка, обратитесь к разработчику сайта!');
            return redirect('producers');
        }
        return redirect()->back();
    }

    /**
     * GET-запрос на получение страницы для редактирования производителя
     * @param Request $request - Запрос на редактирование производителя
     * @param $id - номер производителя
     */
    public function startEdit(Request $request, $id)
    {
        $producer = producer::find($id);
        return view('admin.editProducer', ['producer' => $producer]);
    }

    /**
     * POST - запрос редактирования производителя
     * 
     * @param ProducerRequest $request - Запрос на редактирование производителя
     * @param $id - номер производителя
     */
    public function editProducer(ProducerRequest $request, $id)
    {
        if ($request->validated()) {
            $result = $this->producerService->editProducerPost($request, $id);
            $result == true ? Session::flash('success', 'Произодитель ' . $request->get('name_producer') . ' успешно обновлено')
                : Session::flash('error', 'Произошла ошибка!');
            return redirect('producers');
        }
        return redirect('countries');
    }

    /**
     * POST-запрос на удаление производителя
     * 
     * @param Request $req - Post-запрос
     * @param $id - номер производителя
     */
    public function dropProducer(Request $req, $id)
    {
        $this->producerService->deleteProducer($id) ? Session::flash('success', 'Производитель успешно успешно')
            : Session::flash('error', 'Ошибка при удалении');
        return redirect()->back();
    }
}
