<?php

namespace App\Interfaces\IRepositories;

use App\Producer;
use Illuminate\Support\Collection;

/**
 * Интерфейс для работы репозитория, осуществляющий операции с сущностью "Страна"
 */
interface IProducerRepository
{
    public function addProducer(string $name): bool;

    public function editProducer(Producer $producer, string $name): bool;

    public function deleteProducer(Producer $producer): bool;

    public function getProducerName(?int $id): ?string;

    public function getAll(): Collection;
}
