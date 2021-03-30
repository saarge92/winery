<?php

use Illuminate\Database\Seeder;
use App\Country;
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
        Country::create(['name_rus'=>'Россия'])->save();
        Country::create(['name_rus'=>'Беларусь'])->save();
        Country::create(['name_rus'=>'Франция','name_en'=>'France'])->save();
        Country::create(['name_rus'=>'Франция','name_en'=>'France'])->save();
        Country::create(['name_rus'=>'Чили','name_en'=>'Chili'])->save();
    }
}
