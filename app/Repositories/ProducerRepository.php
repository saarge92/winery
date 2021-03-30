<?php

namespace App\Repositories;

use App\Interfaces\IRepositories\IProducerRepository;
use App\Producer;
use Illuminate\Support\Collection;

/**
 * Репозиторий для работы с сущностью "Производитель"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class ProducerRepository implements IProducerRepository
{
    public function addProducer(string $name): bool
    {
        $producer = new Producer();
        $producer->name = $name;
        return $producer->save();
    }

    public function editProducer(Producer $producer, string $name): bool
    {
        $producer->name = $name;
        return $producer->save();
    }

    /**
     * @param Producer $producer
     * @return bool
     * @throws \Exception
     */
    public function deleteProducer(Producer $producer): bool
    {
        return $producer->delete();
    }

    public function getProducerName(?int $id): ?string
    {
        $producer = Producer::find($id);
        if ($producer) return $producer->name;
        return null;
    }


    public function getAll(): Collection
    {
        return Producer::all();
    }
}
