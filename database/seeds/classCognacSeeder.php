<?php

use Illuminate\Database\Seeder;
use App\classCognac;
class classCognacSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        classCognac::create(['name'=>'3 звезды'])->save();
        classCognac::create(['name'=>'4 звезды'])->save();
        classCognac::create(['name'=>'5 звезд'])->save();
        classCognac::create(['name'=>'Премиум'])->save();
    }
}
