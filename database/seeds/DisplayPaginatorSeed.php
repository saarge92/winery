<?php

use Illuminate\Database\Seeder;
use App\DisplayPaginator;
class DisplayPaginatorSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $dp = DisplayPaginator::create(['num'=>12]);
        $dp->save();
        $dp = DisplayPaginator::create(['num'=>24]);
        $dp->save();
        //Отображение всего списка вин
        $dp = DisplayPaginator::create(['num'=>0]);
        $dp->save();
    }
}
