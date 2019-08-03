<?php

namespace App\Repositories;

use App\Interfaces\IRepositories\IProducerRepository;
use App\producer;

/**
 * Репозиторий для работы с сущностью "Страна"
 */
class ProducerRepository implements IProducerRepository
{
    /**
     * Добавить производителя
     * 
     * @param string $name -Название производителя
     * @return bool Создан ли объект в базе
     * 
     */
    public function addProducer(string $name): bool
    {
        $producer = new producer();
        $producer->name = $name;
        return $producer->save();
    }

    /**
     * Редактирование производителя
     * 
     * @param producer $producer Редактируемый производитель
     * @param string $name Название прозводителя
     * @return bool Редактирован ли объект
     */
    public function editProducer(producer $producer, string $name): bool
    {
        $producer->name = $name;
        return $producer->save();
    }

    /**
     * Удаление прозводителя
     */
    public function deleteProducer(producer $producer): bool
    {
        return $producer->delete();
    }
}
