<?php

namespace App\Services;

use App\Http\Requests\SliderRequest;
use App\Interfaces\IServices\ISliderService;
use App\Interfaces\IRepositories\ISliderRepository;
use App\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

/**
 * Сервис для работы с сущностью "Слайдер"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class SliderService implements ISliderService
{
    private ISliderRepository $sliderRepository;

    public function __construct(ISliderRepository $sliderRepository)
    {
        $this->sliderRepository = $sliderRepository;
    }

    public function createSlider(array $createParams): bool
    {
        $content = $createParams['content'];
        $file = $createParams['src_image'];
        $filename = $content . '_' . date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();
        $destination = public_path() . '/storage/sliders/';
        $file->move($destination, $filename);
        $imagePath = 'sliders/' . $filename;
        $createParams['is_active'] == "1" ? $isActive = true : $isActive = false;
        return $this->sliderRepository->addSlider($content, $imagePath, $isActive);
    }

    public function editSlider(Request $request, int $id): bool
    {
        $slider = Slider::find($id);
        if ($slider) {
            $content = $request->get('content');
            $request->get('is_active') == "1" ? $isActive = true : $isActive = false;
            $file = $request->file('src_image');
            $imagePath = $slider->src_image;
            if (isset($file)) {
                $filename = $request->get('content') . '_' . date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();
                $destination = public_path() . '/storage/sliders/';
                $file->move($destination, $filename);
                $deletePath = public_path() . '/storage/' . $slider->src_image;
                if (file_exists($deletePath)) {
                    unlink($deletePath);
                }
                $imagePath = 'sliders/' . $filename;
            }
            return $this->sliderRepository->editSlider($slider, $content, $imagePath, $isActive);
        }
        return false;
    }

    public function deleteSlider(int $id): bool
    {
        $slider = Slider::find($id);
        if ($slider) {
            $deletePath = public_path() . '/storage/' . $slider->src_image;
            if (file_exists($deletePath)) {
                unlink($deletePath);
            }
            return $this->sliderRepository->deleteSlider($slider);
        }
        return false;
    }

    public function getAllPaginated(): Collection
    {
        return $this->sliderRepository->getSliderPaginated();
    }
}
