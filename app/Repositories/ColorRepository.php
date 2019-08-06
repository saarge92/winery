<?php

namespace App\Repositories;

use App\color;
use App\Interfaces\IRepositories\IColorRepository;

/**
 * Репозиторий для работы с таблицей "Цвета вин"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class ColorRepository implements IColorRepository
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
     * 
     * @param color &$color - Редактируемая запись
     * @param string $name - Название, которое хотим присвоить
     * @return bool - Отредактирована ли запись
     */
    public function editColor(color &$color, string $name): bool
    {
        $color->name = $name;
        $result = $color->save();
        return $result;
    }

    /**
     * Удаление записи о цвете вина
     * 
     * @param color $color - Удаляемая запись
     * @return bool - Удалена ли запись
     */
    public function deleteColor(color $color): bool
    {
        return $color->delete();
    }
}
