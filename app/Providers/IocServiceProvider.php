<?php

namespace App\Providers;

use App\Services\ColorService;
use App\Services\CountryService;
use App\Repositories\ColorRepository;
use App\Repositories\CountryRepository;
use Illuminate\Support\ServiceProvider;
use App\Interfaces\IServices\IColorService;
use App\Interfaces\IServices\ICountryService;
use App\Interfaces\IRepositories\IColorRepository;
use App\Interfaces\IRepositories\ICountryRepository;
use App\Interfaces\IRepositories\IProducerRepository;
use App\Repositories\ProducerRepository;
use App\Interfaces\IServices\IProducerService;
use App\Services\ProducerService;

class IocServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ICountryRepository::class, CountryRepository::class);
        $this->app->bind(IColorRepository::class, ColorRepository::class);
        $this->app->bind(ICountryService::class, CountryService::class);
        $this->app->bind(IColorService::class, ColorService::class);
        $this->app->bind(IProducerRepository::class, ProducerRepository::class);
        $this->app->bind(IProducerService::class, ProducerService::class);
    }
}
