<?php

namespace App\Services;

use App\Interfaces\IRepositories\ISweetRepository;
use App\Interfaces\IServices\ISweetService;
use App\Sweet;
use Illuminate\Pagination\LengthAwarePaginator;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;

class SweetService implements ISweetService
{
    private ISweetRepository $sweetRepository;

    public function __construct(ISweetRepository $sweetRepository)
    {
        $this->sweetRepository = $sweetRepository;
    }

    public function addSweet(array $data): Sweet
    {
        return $this->sweetRepository->addSweet($data);
    }

    public function getPaginated(int $size = 6): LengthAwarePaginator
    {
        return $this->sweetRepository->getPaginatedData($size);
    }

    public function getById(int $id): ?Sweet
    {
        return $this->sweetRepository->getById($id);
    }

    public function editById(int $id, array $data): Sweet
    {
        $sweet = $this->sweetRepository->getById($id);
        if (!$sweet)
            throw new ConflictHttpException("Такая запись не найдена");

        $this->sweetRepository->editSweet($sweet, $data);
        return $sweet;
    }

    public function deleteById(int $id): bool
    {
        return $this->sweetRepository->deleteSweet($id);
    }
}