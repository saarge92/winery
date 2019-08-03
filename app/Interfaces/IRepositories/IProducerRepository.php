<?php

namespace App\Interfaces\IRepositories;

use App\producer;

/**
 * Интерфейс для работы репозитория, осуществляющий операции с сущностью "Страна"
 */
interface IProducerRepository
{
    public function addProducer(string $name): bool;
    public function editProducer(producer $producer, string $name): bool;
    public function deleteProducer(producer $producer): bool;
}
