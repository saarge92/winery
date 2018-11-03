<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\slider;
use App\Traits\sliderTrait;
use App\Http\Requests\SliderRequest;
use Illuminate\Support\Facades\Session;
class SliderController extends Controller
{
    use sliderTrait;
    public function allSliders(Request $request)
    {
        $sliders = slider::paginate(5);
        return view('admin.sliders')->with('sliders', $sliders);
    }
    public function startCreateSlider()
    {
        return view('admin.createSlider');
    }
    public function postCreateSlider(SliderRequest $request)
    {
        if($request->validated())
        {
            $this->addSlider($request) == true ? Session :: flash('succes','Слайдер успешно добавлен') :
            Session::flash('error','Ошибка при добавлении слайдера');
            return redirect('allSliders');
        }
        return redirect()->back();
    }
    public function getEditSlider(Request $request,$id)
    {
        $slider = slider::find($id);
        return view('admin.editSlider',['slider'=>$slider]);
    }
    public function postEditSlider(Request $request,$id)
    {
        $this->editSlider($request,$id) == true ?  Session :: flash('succes','Слайдер успешно отредактирован') :
        Session::flash('error','Ошибка при редактировании слайдера');
        return redirect('allSliders');
    }
    public function dropSlider($id)
    {
        $this->deleteSlider($id) == true ?  Session :: flash('succes','Слайдер успешно удален') :
        Session::flash('error','Ошибка при редактировании слайдера');
        return redirect('allSliders');
    }
}
