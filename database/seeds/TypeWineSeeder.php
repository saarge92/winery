<?php

use Illuminate\Database\Seeder;
use App\TypeOfWine;

class TypeWineSeeder extends Seeder
{
    private array $typeWines = [
        'Игристые вина',
        'Десертные вина'
    ];

    public function run()
    {
        foreach ($this->typeWines as $typeWine) {
            TypeOfWine::create([
                'name' => $typeWine
            ])->save();
        }
    }
}
