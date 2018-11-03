<?php

use Illuminate\Database\Seeder;
use App\sweet;
class sweetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        sweet::create(['name'=>'сухое'])->save();
        sweet::create(['name'=>'полусладкое'])->save();
        sweet::create(['name'=>'полусухое'])->save();
    }
}
