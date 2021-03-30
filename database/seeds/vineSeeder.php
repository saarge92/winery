<?php

use Illuminate\Database\Seeder;
use App\Vine;
use App\Country;
use App\Color;
use App\Sweet;
use App\Producer;
class vineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $country = Country::where(['name_rus' => 'Россия'])->first();
        $color = Color::where(['name' => 'Красное'])->first();
        $sweet = Sweet::where(['name' => 'сухое'])->first();
        $producer =  Producer::where(['name'=>'Vina Garces Silva Limitada'])->first();
        Vine::create([
            'name_rus' => 'Шато де Потенсак АОС',
            'name_en' => 'Chaute de Pantesak',
            'price' => '4897',
            'price_cup' => '1079',
            'volume' => 0.75,
            'year' => 1934,
            'strength' => 15,
            'sort_contain' => 'Шардоне 100%',
            'country_id' => $country->id,
            'color_id' => $color->id,
            'sweet_id' => $sweet->id,
            'producer_id' => $producer->id,
            'image_src' => 'wines/CaliforniaRed.png'
        ])->save();
    }
}
