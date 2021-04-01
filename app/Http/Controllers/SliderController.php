<?php

namespace App\Http\Controllers;

use App\Slider;
use App\Traits\SliderTrait;
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
 * @copyright Copyright (c) 2019 KremCafe
 */
class SliderController extends Controller
{
    private ISliderService $sliderService;

    public function __construct(ISliderService $sliderService)
    {
        $this->sliderService = $sliderService;
    }

    public function allSliders()
    {
        $sliders = $this->sliderService->getAllPaginated();
        return view('admin.sliders')->with('sliders', $sliders);
    }

    public function startCreateSlider()
    {
        return view('admin.createSlider');
    }

    public function postCreateSlider(SliderRequest $request)
    {
        if ($request->validated()) {
            $created = $this->sliderService->createSlider($request->all());
            $created ? Session::flash('succes', 'Слайдер успешно добавлен') : Session::flash('error', 'Ошибка при добавлении слайдера');
            return redirect('allSliders');
        }
        return redirect()->back();
    }

    public function getEditSlider(Request $request, $id)
    {
        $slider = Slider::find($id);
        return view('admin.editSlider', ['slider' => $slider]);
    }

    public function postEditSlider(Request $request, int $id)
    {
        $edited = $this->sliderService->editSlider($request, $id);
        $edited ? Session::flash('succes', 'Слайдер успешно отредактирован') : Session::flash('error', 'Ошибка при редактировании слайдера');
        return redirect('allSliders');
    }

    public function dropSlider(int $id)
    {
        $deleted = $this->sliderService->deleteSlider($id);
        $deleted ? Session::flash('succes', 'Слайдер успешно удален') : Session::flash('error', 'Ошибка при редактировании слайдера');
        return redirect('allSliders');
    }
}
