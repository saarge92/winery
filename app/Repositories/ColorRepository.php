<?php

namespace App\Repositories;

use App\Color;
use App\Interfaces\IRepositories\IColorRepository;
use Illuminate\Support\Collection;

/**
 * Репозиторий для работы с таблицей "Цвета вин"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class ColorRepository implements IColorRepository
{
    public function getColorNameById(int $id): ?string
    {
        $color = Color::find($id);
        $color ? $colorName = $color->name : $colorName = null;
        return $colorName;
    }

    public function getPriorityColorById(int $id): ?string
    {
        $color = Color::find($id);
        $color ? $priority = $color->priority : $priority = null;
        return $priority;
    }

    public function addColor(string $name): bool
    {
        $color = new Color();
        $color->name = $name;
        return $color->save();
    }

    public function editColor(Color &$color, string $name): bool
    {
        $color->name = $name;
        return $color->save();
    }

    public function deleteColor(Color $color): bool
    {
        return $color->delete();
    }

    public function getAllColors(): Collection
    {
        return Color::all();
    }

    public function getById(int $id): ?Color
    {
        return Color::find($id);
    }
}
