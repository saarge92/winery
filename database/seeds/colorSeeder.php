<?php

use Illuminate\Database\Seeder;
use App\color;
class colorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        color::create(['name'=>'Красное'])->save();
        color::create(['name'=>'Белое'])->save();
        color::create(['name'=>'Розовое'])->save();
    }
}
