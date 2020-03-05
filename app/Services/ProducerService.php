<?php

namespace App\Services;

use App\producer;
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
    private $producerRepository;

    public function __construct(IProducerRepository $producerRepository)
    {
        $this->producerRepository = $producerRepository;
    }

    /**
     * Создание производителя
     *
     * @param array $createParams Параметры создания производителя
     * @return bool Создан ли производитель
     */
    public function createProducer(array $createParams): bool
    {
        return $this->producerRepository->addProducer($createParams['name_producer']);
    }


    /**
     * Редактирование производителя вина
     *
     * @param array $updateParams Параметры обновления производителя
     * @param int $id - id номер производителя
     * @return bool $result - Редактирован ли производитель
     */
    public function editProducerPost(array $updateParams, int $id): bool
    {
        $producer = producer::find($id);
        if ($producer != null) {
            return $this->producerRepository->editProducer($producer, $updateParams['name_producer']);
        }
        return false;
    }

    /**
     * Удаление производителя вина
     *
     * @param int $id - id номер производителя
     * @return bool $result - Редактировано ли тип проивзодитель
     */
    public function deleteProducer(int $id): bool
    {
        $producer = producer::find($id);
        if (isset($producer)) {
            return $this->producerRepository->deleteProducer($producer);
        }
        return false;
    }
}
