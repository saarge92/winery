<?php

namespace App\Interfaces\IServices;

use App\Http\Requests\SliderRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

/**
 * Интерфейс для работы сервиса, который осуществляет бизнес-логику с сущностью "Слайдер"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
interface ISliderService
{
    public function createSlider(array $createParams): bool;

    public function editSlider(Request $request, int $id): bool;

    public function deleteSlider(int $id): bool;

    public function getAllPaginated(): Collection;
}
