<?php

namespace App\Services;

use App\producer;
use Illuminate\Http\Request;
use App\Http\Requests\ProducerRequest;
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
    private $producerRepository;
    public function __construct(IProducerRepository $producerRepository)
    {
        $this->producerRepository = $producerRepository;
    }

    /**
     * Создание производителя
     * 
     * @param ProducerRequest $request - Post запрос с параметрами
     * @return bool Создан ли производитель
     */
    public function createProducer(ProducerRequest $request): bool
    {
        $name = $request->get('name_producer');
        $created = $this->producerRepository->addProducer($name);
        return $created;
    }


    /**
     * Редактирование производителя вина
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер производителя
     * @return bool $result - Редактирован ли производитель
     */
    public function editProducerPost(Request $request, int $id): bool
    {
        $producer = producer::find($id);
        if ($producer != null) {
            $name = $request->get('name_producer');
            $result = $this->producerRepository->editProducer($producer, $name);
            return $result;
        }
        return false;
    }

    /**
     * Удаление производителя вина
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер производителя
     * @return bool $result - Редактировано ли тип проивзодитель
     */
    public function deleteProducer(int $id): bool
    {
        $producer = producer::find($id);
        if (isset($producer)) {
            $result = $this->producerRepository->deleteProducer($producer);
            return $result;
        }
        return false;
    }
}
