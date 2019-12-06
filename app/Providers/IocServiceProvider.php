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
use App\Interfaces\IRepositories\ISliderRepository;
use App\Repositories\SliderRepository;
use App\Interfaces\IServices\ISliderService;
use App\Services\SliderService;
use App\Interfaces\IServices\IWineService;
use App\Services\WineService;

class IocServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(ICountryRepository::class, CountryRepository::class);
        $this->app->singleton(IColorRepository::class, ColorRepository::class);
        $this->app->singleton(ICountryService::class, CountryService::class);
        $this->app->singleton(IColorService::class, ColorService::class);
        $this->app->singleton(IProducerRepository::class, ProducerRepository::class);
        $this->app->singleton(IProducerService::class, ProducerService::class);
        $this->app->singleton(ISliderRepository::class, SliderRepository::class);
        $this->app->singleton(ISliderService::class, SliderService::class);
        $this->app->singleton(IWineService::class, WineService::class);
    }
}
