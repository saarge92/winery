<?php

namespace App\Repositories;

use App\color;
use App\Interfaces\IRepositories\ICountryRepository;

class ColorRepository implements ICountryRepository
{
    /**
     * Возвращает цвет вина по id
     * 
     * Возвращает либо string либо null
     * 
     * @param int $id - входной параметр для поиска вина
     * @return string
     */
    public function getColorNameById(int $id): ?string
    {
        $color = color::find($id);
        $color ? $colorName = $color->name : $colorName = null;
        return $colorName;
    }

    /**
     * Возвращает приоритет цвета вина
     * 
     * @param int $id - id цвета
     * 
     * @deprecated
     * @return string
     */
    public function getPriorityColorById(int $id): ?string
    {
        $color = color::find($id);
        $color ? $priority = $color->priority : $priority = null;
        return $priority;
    }

    /**
     * Добавление цвета вина
     * 
     * @param string $name Название вина
     * @return bool $result Результат сохранения
     */
    public function addColor(string $name): bool
    {
        $color = new color();
        $color->name = $name;
        $result = $color->save();
        return $result;
    }

    /**
     * Редактирование цвета вина
     */
    public function editColor(color $color, string $name): bool
    {
        $color->name = $name;
        $result = $color->save();
        return $result;
    }

    public function deleteColor(color $color): bool
    {
        return $color->delete();
    }
}
