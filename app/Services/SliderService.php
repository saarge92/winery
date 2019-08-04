<?php

namespace App\Services;

use App\Http\Requests\SliderRequest;
use App\Interfaces\IServices\ISliderService;
use App\Interfaces\IRepositories\ISliderRepository;
use App\slider;
use Illuminate\Http\Request;

/**
 * Сервис для работы с сущностью "Слайдер"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class SliderService implements ISliderService
{
    private $sliderRepository;

    public function __construct(ISliderRepository $sliderRepository)
    {
        $this->sliderRepository = $sliderRepository;
    }

    /**
     * Добавление слайдера
     * 
     * @param SliderRequest $request - список параметров
     * @return bool $result - Добавлен ли слайдер
     */
    public function createSlider(SliderRequest $request): bool
    {
        $content = $request->get('content');
        $file = $request->file('src_image');
        $filename = $request->get('content') . '_' . date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();
        $destination = public_path() . '/storage/sliders/';
        $file->move($destination, $filename);
        $imagePath = 'sliders/' . $filename;
        $request->get('is_active') == "1" ? $isActive = true : $isActive = false;
        $created = $this->sliderRepository->addSlider($content, $imagePath, $isActive);
        return $created;
    }

    /**
     * Редактирование слайдера
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер слайдера
     * @return bool $result - Редактирован ли слайдер
     */
    public function editSlider(Request $request, int $id): bool
    {
        $slider = slider::find($id);
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
            $edited = $this->sliderRepository->editSlider($slider, $content, $imagePath, $isActive);
            return $edited;
        }
        return false;
    }

    public function deleteSlider(int $id): bool
    {
        $slider = slider::find($id);
        if ($slider) {
            $deletePath = public_path() . '/storage/' . $slider->src_image;
            if (file_exists($deletePath)) {
                unlink($deletePath);
            }
            $result = $this->sliderRepository->deleteSlider($slider);
            return $result;
        }
        return $result;
    }
}
