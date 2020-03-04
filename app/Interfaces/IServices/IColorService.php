<?php

namespace App\Interfaces\IServices;

use App\Http\Requests\ColorRequest;

/**
 * Интерфейс для сервиса по работе с сущностью "Цвет вина"
 */
interface IColorService
{
    public function addColor(array $createParams): bool;

    public function editColor(array $editParams, int $id): bool;

    public function deleteColor(int $id): bool;
}
