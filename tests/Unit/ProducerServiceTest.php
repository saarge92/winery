<?php

namespace Tests\Unit;

use App\Interfaces\IServices\IProducerService;
use App\producer;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

/**
 * Тестирование функционала по созданию производителя
 * @package Tests\Unit
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class ProducerServiceTest extends TestCase
{
    use WithFaker;

    /**
     * Тестирование создания производителя
     * Тестирование метода createProducer
     */
    public function testCreateProducer()
    {
        $producerService = $this->resolveProducerService();
        $nameProducer = $this->faker->company;
        $isCreated = $producerService->createProducer(['name_producer' => $nameProducer]);
        $this->assertSame($isCreated, true);
    }

    /**
     * Получение зависимости IProducerService
     * @return IProducerService
     */
    private function resolveProducerService(): IProducerService
    {
        return resolve(IProducerService::class);
    }

    /**
     * Тестирование редактирования производителя в базе
     * Тестирование метода editProducer
     */
    public function testEditProducer()
    {
        $producerService = $this->resolveProducerService();
        $randomProducer = producer::orderByRaw("RAND()")->first();
        $newName = $this->faker->company;
        $isEdited = $producerService->editProducerPost(['name_producer' => $newName], $randomProducer['id']);
        $this->assertSame($isEdited, true);
    }

    /**
     * Тестирование удаления производителя
     * Тестирование метода deleteProducer
     */
    public function testDeleteProducer()
    {
        $producerService = $this->resolveProducerService();
        $randomProducer = producer::orderByRaw("RAND()")->first();
        $isDeleted = $producerService->deleteProducer($randomProducer['id']);
        $this->assertSame($isDeleted, true);
    }
}
