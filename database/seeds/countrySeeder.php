<?php

use Illuminate\Database\Seeder;
use App\country;
class countrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        country::create(['name_rus'=>'Россия'])->save();
        country::create(['name_rus'=>'Беларусь'])->save();
        country::create(['name_rus'=>'Франция','name_en'=>'France'])->save();
        country::create(['name_rus'=>'Франция','name_en'=>'France'])->save();
        country::create(['name_rus'=>'Чили','name_en'=>'Chili'])->save();
    }
}
