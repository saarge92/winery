<?php

use Illuminate\Database\Seeder;
use App\type_of_wine;

class TypeWineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $type_of_wine = type_of_wine::create([
            'name' => 'Игристые вина',
        ])->save();
        $type_of_wine = type_of_wine::create([
            'name' => 'Десертные вина'
        ])->save();
    }
}
