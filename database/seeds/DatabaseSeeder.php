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
        $this->call(CountrySeeder::class);
        $this->call(ColorSeeder::class);
        $this->call(SweetSeeder::class);
        $this->call(ClassCognacSeeder::class);
        $this->call(ProducerSeeder::class);
        $this->call(SliderSeeder::class);
        $this->call(VineSeeder::class);
        $this->call(DisplayPaginatorSeed::class);
        //$this->call(RoleSeeder::class);
    }
}
