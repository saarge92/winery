<?php

namespace App\Services;

use App\Interfaces\IRepositories\ITypeWineRepository;
use App\Interfaces\IServices\ITypeWineService;
use App\TypeOfWine;
use Illuminate\Pagination\LengthAwarePaginator;

class TypeWineService implements ITypeWineService
{
    private ITypeWineRepository $typeWineRepository;

    public function __construct(ITypeWineRepository $typeWineRepository)
    {
        $this->typeWineRepository = $typeWineRepository;
    }

    public function getPaginatedData(int $size = 6): LengthAwarePaginator
    {
        return $this->typeWineRepository->getPaginatedData($size);
    }

    public function addTypeWine(array $data): TypeOfWine
    {
        return $this->typeWineRepository->createTypeOfWine($data);
    }

    public function getById(int $id): ?TypeOfWine
    {
        return $this->typeWineRepository->getById($id);
    }

    public function updateTypeOfWine(int $id, array $data): TypeOfWine
    {
        $typeOfWine = $this->typeWineRepository->getById($id);
        $this->typeWineRepository->editTypeWine($typeOfWine, $data);
        return $typeOfWine;
    }

    public function deleteById(int $id): void
    {
        $this->typeWineRepository->deleteTypeWine($id);
    }
}