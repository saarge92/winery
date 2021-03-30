<?php

use Illuminate\Database\Seeder;
use App\Color;
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
        Color::create(['name'=>'Красное'])->save();
        Color::create(['name'=>'Белое'])->save();
        Color::create(['name'=>'Розовое'])->save();
    }
}
