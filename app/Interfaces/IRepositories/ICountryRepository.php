<?php

namespace App\Interfaces\IRepositories;

interface ICountryRepository
{
    public function getCountryNameRusById(int $id): ?string;
    public function getCountryNameEnById(int $id): ?string;
}
