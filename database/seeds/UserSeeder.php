<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $emailAdmin = env('EMAIL_ADMIN');
        $userPassword = env('USER_PASSWORD');
        $userName = env('USER_NAME');
        $hashPassword = bcrypt($userPassword);

        \App\User::create([
            'name' => $userName,
            'email' => $emailAdmin,
            'password' => $hashPassword
        ])->save();
    }
}
