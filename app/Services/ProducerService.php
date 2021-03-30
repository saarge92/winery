<?php

namespace App\Services;

use App\Producer;
use Illuminate\Http\Request;
use App\Interfaces\IServices\IProducerService;
use App\Interfaces\IRepositories\IProducerRepository;

/**
 * Сервис для работы с сущностью "Страна"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class ProducerService implements IProducerService
{
    private IProducerRepository $producerRepository;

    public function __construct(IProducerRepository $producerRepository)
    {
        $this->producerRepository = $producerRepository;
    }

    public function createProducer(array $createParams): bool
    {
        return $this->producerRepository->addProducer($createParams['name_producer']);
    }


    public function editProducerPost(array $editParams, int $id): bool
    {
        $producer = Producer::find($id);
        if ($producer != null) {
            return $this->producerRepository->editProducer($producer, $editParams['name_producer']);
        }
        return false;
    }

    public function deleteProducer(int $id): bool
    {
        $producer = Producer::find($id);
        if (isset($producer)) {
            return $this->producerRepository->deleteProducer($producer);
        }
        return false;
    }
}
