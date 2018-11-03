<?php

namespace App\Traits;

use App\slider;

// use Illuminate\Support\Facades\File;

trait sliderTrait
{
    public function addSlider($req)
    {
        $slider = new slider();
        $slider->content = $req->get('content');
        $file = $req->file('src_image');
        $filename = $req->get('content') . '_' . date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();
        $destination = public_path() . '/storage/sliders/';
        $file->move($destination, $filename);
        $slider->src_image = 'sliders/' . $filename;
        $req->get('is_active') == "1" ? $slider->is_active = true : $slider->is_active = false;
        $result = $slider->save();
        return $result;
    }
    public function editSlider($req, $id)
    {
        $slider = slider::find($id);
        if ($slider!=null) {
            $slider->content = $req->get('content');
            $req->get('is_active') == "1" ? $slider->is_active = true : $slider->is_active = false;
            $file = $req->file('src_image');
            if ($file) {
                $filename = $req->get('content') . '_' . date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();
                $destination = public_path() . '/storage/sliders/';
                $file->move($destination, $filename);
                unlink(public_path().'/storage/'.$slider->src_image);
                $slider->src_image = 'sliders/' . $filename;
            }
            $result = $slider->save();
            return $result;
        }
        return false;
    }
    public function deleteSlider($id)
    {
        $slider = slider::find($id);
        if (isset($slider)) {
            unlink(public_path().'/storage/'.$slider->src_image);
            $result = $slider->delete();
            return $result;
        }
        return $result;
    }
}
