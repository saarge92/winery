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
        $this->call(sweetSeeder::class);
        $this->call(classCognacSeeder::class);
        $this->call(producerSeeder::class);
        $this->call(sliderSeeder::class);
        $this->call(vineSeeder::class);
        //$this->call(RoleSeeder::class);
    }
}
