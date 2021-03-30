<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(countrySeeder::class);
        $this->call(colorSeeder::class);
        $this->call(SweetSeeder::class);
        $this->call(ClassCognacSeeder::class);
        $this->call(producerSeeder::class);
        $this->call(sliderSeeder::class);
        $this->call(vineSeeder::class);
        $this->call(DisplayPaginatorSeed::class);
        //$this->call(RoleSeeder::class);
    }
}
