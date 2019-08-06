<?php

namespace App\Repositories;

use App\slider;
use App\Interfaces\IRepositories\ISliderRepository;


/**
 * Репозиторий для работы с сущностью "Слайдер"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class SliderRepository implements ISliderRepository
{
    /**
     * Добавление слайдера в базу
     * 
     * @param string $content - Описание слайдера
     * @param string $imagePath - Путь, где хранится слайдер
     * @param bool $isActive - Активен ли слайдер
     * @return bool - Результат сохранения
     */
    public function addSlider(string $content, string $imagePath, bool $isActive): bool
    {
        $slider = new slider();
        $slider->content = $content;
        $slider->src_image = $imagePath;
        $slider->is_active = $isActive;
        return $slider->save();
    }

    /**
     * Редактирование записи о слайдере
     * 
     * @param slider $slider - Редактируемая запись о слайдере
     * @param string $content - Описание слайдера
     * @param string $imagePath - Путь, где хранится слайдер
     * @param bool $isActive - Активен ли слайдер
     * @return bool - Результат сохранения
     */
    public function editSlider(slider $slider, string $content, string $imagePath, bool $isActive): bool
    {
        $slider->content = $content;
        $slider->src_image = $imagePath;
        $slider->is_active = $isActive;
        return $slider->save();
    }

    /**
     * Удалить запись о слайдере
     * 
     * @param slider $slider - Удаляемая запись о слайдере
     * @return bool результат удаления
     */
    public function deleteSlider(slider $slider): bool
    {
        return $slider->delete();
    }
}
