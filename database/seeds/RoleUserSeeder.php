<?php

use Illuminate\Database\Seeder;

class RoleUserSeeder extends Seeder
{
    private string $userAdmin;
    private array $userRoles = [];

    public function __construct()
    {
        $this->userAdmin = env('EMAIL_ADMIN');
        $this->userRoles = [
            $this->userAdmin => [
                'admin'
            ]
        ];
    }

    public function run()
    {
        foreach ($this->userRoles as $user => $roles) {
            $userExist = \App\User::where([
                'email' => $user
            ])->first();
            if ($userExist) {
                foreach ($roles as $role) {
                    $roleExist = \App\Role::where(['name' => $role])->first();
                    if ($roleExist) {
                        $userExist->roles()->attach($roleExist);
                    }
                }
            }
        }
    }
}
