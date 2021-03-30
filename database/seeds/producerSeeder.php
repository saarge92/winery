<?php

use Illuminate\Database\Seeder;
use App\Producer;
class producerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Producer::create(['name'=>'Vina Garces Silva Limitada'])->save();
        Producer::create(['name'=>'Лангедок-Руссийон, Кот дю Руссийон'])->save();
        Producer::create(['name'=>'Rioja/Риоха'])->save();
    }
}
