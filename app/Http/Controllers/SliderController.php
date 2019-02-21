<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\slider;
use App\Traits\sliderTrait;
use App\Http\Requests\SliderRequest;
use Illuminate\Support\Facades\Session;

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
    use sliderTrait;

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
            $this->addSlider($request) == true ? Session::flash('succes', 'Слайдер успешно добавлен') : Session::flash('error', 'Ошибка при добавлении слайдера');
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
    public function postEditSlider(Request $request, $id)
    {
        $this->editSlider($request, $id) == true ? Session::flash('succes', 'Слайдер успешно отредактирован') : Session::flash('error', 'Ошибка при редактировании слайдера');
        return redirect('allSliders');
    }

    /**
     * POST-запрос на удаление слайдера
     * 
     * @param Request $req - Post-запрос
     * @param $id - номер слайдера
     */
    public function dropSlider($id)
    {
        $this->deleteSlider($id) == true ? Session::flash('succes', 'Слайдер успешно удален') : Session::flash('error', 'Ошибка при редактировании слайдера');
        return redirect('allSliders');
    }
}
