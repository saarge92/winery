<?php

use Illuminate\Database\Seeder;
use App\Color;

class ColorSeeder extends Seeder
{
    public function run()
    {
        Color::create(['name' => 'Красное'])->save();
        Color::create(['name' => 'Белое'])->save();
        Color::create(['name' => 'Розовое'])->save();
    }
}
