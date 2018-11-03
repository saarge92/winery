<?php

use Illuminate\Database\Seeder;
use App\producer;
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
        producer::create(['name'=>'Vina Garces Silva Limitada'])->save();
        producer::create(['name'=>'Лангедок-Руссийон, Кот дю Руссийон'])->save();
        producer::create(['name'=>'Rioja/Риоха'])->save();
    }
}
