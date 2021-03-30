<?php

use Illuminate\Database\Seeder;
use App\Slider;
class sliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Slider::create(['src_image'=>'sliders/wine1.jpg'])->save();
        Slider::create(['src_image'=>'sliders/wine2.jpg'])->save();
        Slider::create(['src_image'=>'sliders/wine3.jpg'])->save();
    }
}
