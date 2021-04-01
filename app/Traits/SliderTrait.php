<?php

namespace App\Traits;

use App\Slider;
use Illuminate\Http\Request;

/**
 * Trait для работы со слайдерами на главной странице
 *
 * Trait содержит базовые операции с сущностью "Слайдеры"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
trait SliderTrait
{
    public function addSlider(Request $req): bool
    {
        $slider = new Slider();
        $slider->content = $req->get('content');
        $file = $req->file('src_image');
        $filename = $req->get('content') . '_' . date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();
        $destination = public_path() . '/storage/sliders/';
        $file->move($destination, $filename);
        $slider->src_image = 'sliders/' . $filename;
        $req->get('is_active') == "1" ? $slider->is_active = true : $slider->is_active = false;
        return $slider->save();
    }

    public function editSlider(Request $req, int $id): bool
    {
        $slider = Slider::find($id);
        if ($slider != null) {
            $slider->content = $req->get('content');
            $req->get('is_active') == "1" ? $slider->is_active = true : $slider->is_active = false;
            $file = $req->file('src_image');
            if (isset($file)) {
                $filename = $req->get('content') . '_' . date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();
                $destination = public_path() . '/storage/sliders/';
                $file->move($destination, $filename);
                $deletePath = public_path() . '/storage/' . $slider->src_image;
                if (file_exists($deletePath)) {
                    unlink($deletePath);
                }
                $slider->src_image = 'sliders/' . $filename;
            }
            return $slider->save();
        }
        return false;
    }

    public function deleteSlider($id): bool
    {
        $slider = Slider::find($id);
        if (isset($slider)) {
            $deletePath = public_path() . '/storage/' . $slider->src_image;
            if (file_exists($deletePath)) {
                unlink($deletePath);
            }
            return $slider->delete();
        }
        return false;
    }
}
