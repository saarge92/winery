<?php

use Illuminate\Database\Seeder;
use App\slider;
class sliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        slider::create(['src_image'=>'sliders/wine1.jpg'])->save();
        slider::create(['src_image'=>'sliders/wine2.jpg'])->save();
        slider::create(['src_image'=>'sliders/wine3.jpg'])->save();
    }
}
