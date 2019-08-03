<?php

namespace App\Services;

use App\color;
use App\Http\Requests\ColorRequest;
use App\Interfaces\IServices\IColorService;
use App\Interfaces\IRepositories\IColorRepository;

class ColorService implements IColorService
{
    private $colorRepository;

    public function __construct(IColorRepository $colorRepository)
    {
        $this->colorRepository = $colorRepository;
    }

    /**
     * Добавление цвета вина в базу
     */
    public function addColor(ColorRequest $request): bool
    {
        $name = $request->get('name_color');
        $created = $this->colorRepository->addColor($name);
        return $created;
    }

    /**
     * Редактирование цвета
     */
    public function editColor(ColorRequest $request, int $id): bool
    {
        $color = color::find($id);
        if ($color != null) {
            $name = $request->get('name_color');
            $edited = $this->colorRepository->editColor($color, $name);
            return $edited;
        }
        return false;
    }

    /**
     * Удаление цвета
     */
    public function deleteColor(int $id): bool
    {
        $deleted = false;
        $color = color::find($id);
        if ($color) $deleted = $this->colorRepository->deleteColor($color);
        return $deleted;
    }
}
