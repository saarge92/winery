<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserInRoles extends Migration
{
    public function up()
    {
        Schema::create('user_in_roles', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('role_id');

            $table->foreign('role_id')->references('id')->on('roles')->onDelete('NO ACTION');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('NO ACTION');

            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_in_roles');
    }
}
