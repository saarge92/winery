<?php

use Illuminate\Database\Seeder;
use App\Sweet;
class SweetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Sweet::create(['name'=>'сухое'])->save();
        Sweet::create(['name'=>'полусладкое'])->save();
        Sweet::create(['name'=>'полусухое'])->save();
    }
}
