<?php

namespace App\Services;

use App\Color;
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
    private IColorRepository $colorRepository;

    public function __construct(IColorRepository $colorRepository)
    {
        $this->colorRepository = $colorRepository;
    }

    public function addColor(array $createParams): bool
    {
        return $this->colorRepository->addColor($createParams['name']);
    }

    public function editColor(array $editParams, int $id): bool
    {
        $color = Color::find($id);
        if ($color != null) {
            return $this->colorRepository->editColor($color, $editParams['name_color']);
        }
        return false;
    }

    public function deleteColor(int $id): bool
    {
        $deleted = false;
        $color = Color::find($id);
        if ($color) $deleted = $this->colorRepository->deleteColor($color);
        return $deleted;
    }
}
