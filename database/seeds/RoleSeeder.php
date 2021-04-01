<?php

use Illuminate\Database\Seeder;
use App\Role;

class  RoleSeeder extends Seeder
{
    public function run()
    {
        $roleAdmin = Role::create(['name' => 'admin']);
        $roleAdmin->save();
    }
}
