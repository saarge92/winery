<?php

namespace App\Http\Controllers;

use App\slider;
use App\Traits\sliderTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SliderRequest;
use Illuminate\Support\Facades\Session;
use App\Interfaces\IServices\ISliderService;

/**
 * Контроллер для работы со слайдерами на гавной странице
 * 
 * Предоставляет методы для работы с сущностью "слайдер"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
class SliderController extends Controller
{
    private $sliderService;

    public function __construct(ISliderService $sliderService)
    {
        $this->sliderService = $sliderService;
    }

    /** 
     * Получение страницы со списком слайдеров
     */
    public function allSliders(Request $request)
    {
        $sliders = slider::paginate(6);
        return view('admin.sliders')->with('sliders', $sliders);
    }

    /**
     * GET-запрос на получение страницы для создания слайдера
     */
    public function startCreateSlider()
    {
        return view('admin.createSlider');
    }

    /**
     * POST-запрос для создания слайдера
     * 
     * @param SliderRequest $request - Запрос на создание слайдера
     */
    public function postCreateSlider(SliderRequest $request)
    {
        if ($request->validated()) {
            $created = $this->sliderService->createSlider($request);
            $created ? Session::flash('succes', 'Слайдер успешно добавлен') : Session::flash('error', 'Ошибка при добавлении слайдера');
            return redirect('allSliders');
        }
        return redirect()->back();
    }

    /**
     * GET-запрос на получение страницы для редактирования слайдера
     * @param Request $request - Запрос на редактирование производителя
     * @param $id - номер слайдера
     */
    public function getEditSlider(Request $request, $id)
    {
        $slider = slider::find($id);
        return view('admin.editSlider', ['slider' => $slider]);
    }

    /**
     * POST - запрос редактирования производителя
     * 
     * @param ProducerRequest $request - Запрос на редактирование слайдера
     * @param $id - номер слайдера
     */
    public function postEditSlider(Request $request, int $id)
    {
        $edited = $this->sliderService->editSlider($request, $id);
        $edited ? Session::flash('succes', 'Слайдер успешно отредактирован') : Session::flash('error', 'Ошибка при редактировании слайдера');
        return redirect('allSliders');
    }

    /**
     * POST-запрос на удаление слайдера
     * 
     * @param Request $req - Post-запрос
     * @param $id - номер слайдера
     */
    public function dropSlider(int $id)
    {
        $deleted = $this->sliderService->deleteSlider($id);
        $deleted ? Session::flash('succes', 'Слайдер успешно удален') : Session::flash('error', 'Ошибка при редактировании слайдера');
        return redirect('allSliders');
    }
}
