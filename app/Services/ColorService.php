<?php

namespace App\Services;

use App\color;
use App\Http\Requests\ColorRequest;
use App\Interfaces\IServices\IColorService;
use App\Interfaces\IRepositories\IColorRepository;

/**
 * Сервис для обработки бизнес-логики при работе с сущностью "Цвет вина"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class ColorService implements IColorService
{
    private $colorRepository;

    public function __construct(IColorRepository $colorRepository)
    {
        $this->colorRepository = $colorRepository;
    }

    /**
     * Добавление цвета вина в базу
     *
     * @param array $createParams Параметры создания
     * @return bool - Создано ли вино
     */
    public function addColor(array $createParams): bool
    {
        return $this->colorRepository->addColor($createParams['name']);
    }

    /**
     * Редактирование цвета
     *
     * @param array $updateParams
     * @param int $id - Id цвета
     * @return bool - Отредактирован ли запись
     */
    public function editColor(array $updateParams, int $id): bool
    {
        $color = color::find($id);
        if ($color != null) {
            return $this->colorRepository->editColor($color, $updateParams['name_color']);
        }
        return false;
    }

    /**
     * Удаление цвета
     *
     * @param int $id - Id цвета
     * @return bool - Удален ли цвет
     */
    public function deleteColor(int $id): bool
    {
        $deleted = false;
        $color = color::find($id);
        if ($color) $deleted = $this->colorRepository->deleteColor($color);
        return $deleted;
    }
}
