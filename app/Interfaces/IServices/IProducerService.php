<?php

namespace App\Interfaces\IServices;

use Illuminate\Http\Request;
use App\Http\Requests\ProducerRequest;

/**
 * Интерфейс для работы сервиса, который осуществляет бизнес-логику с сущностью "Производитель"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
interface IProducerService
{
    public function createProducer(array $createParams): bool;

    public function editProducerPost(array $editParams, int $id): bool;

    public function deleteProducer(int $id): bool;
}
