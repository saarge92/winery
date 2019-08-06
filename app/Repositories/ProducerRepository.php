<?php

namespace App\Repositories;

use App\Interfaces\IRepositories\IProducerRepository;
use App\producer;

/**
 * Репозиторий для работы с сущностью "Производитель"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
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
     * 
     * @param producer $producer - Редактируемая запись о производителе
     * @return bool - Отредактирована ли запись
     */
    public function deleteProducer(producer $producer): bool
    {
        return $producer->delete();
    }

    /**
     * Получение имение производителя по его Id
     * 
     * @param int $id - Id прозводителя
     * @return string - Название производителя
     */
    public function getProducerName(?int $id): ?string
    {
        $producer = producer::find($id);
        if ($producer) return $producer->name;
        return null;
    }
}
