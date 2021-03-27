<?php

use Illuminate\Database\Seeder;
use App\ClassCognac;
class ClassCognacSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ClassCognac::create(['name'=>'3 звезды'])->save();
        ClassCognac::create(['name'=>'4 звезды'])->save();
        ClassCognac::create(['name'=>'5 звезд'])->save();
        ClassCognac::create(['name'=>'Премиум'])->save();
    }
}
