<?php

use Illuminate\Database\Seeder;
use App\Role;
use App\User;
class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $role_admin = Role::create(['name'=>'admin']);
        $role_admin->save();
        $user = User::create([
            'email'=>'admin@barhouse.com',
            'password'=>bcrypt('admin123'),
            'name'=>'Barhouse'
        ]);
        $user->save();
        $user->roles()->attach($role_admin);
    }
}
