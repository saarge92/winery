<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\IRepositories\ICountryRepository;
use App\Repositories\CountryRepository;
use App\Interfaces\IRepositories\IColorRepository;
use App\Repositories\ColorRepository;

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
    }
}
