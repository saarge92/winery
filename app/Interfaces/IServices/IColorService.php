<?php

namespace App\Interfaces\IServices;

use App\Http\Requests\ColorRequest;

/**
 * Интерфейс для сервиса по работе с сущностью "Цвет вина"
 */
interface IColorService
{
    public function addColor(ColorRequest $request): bool;
    public function editColor(ColorRequest $request, int $id) : bool;
    public function deleteColor(int $id): bool;
}
