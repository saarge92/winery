<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVines extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vines', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name_rus');
            $table->string('name_en')->nullable();
            $table->float('price', 20, 2);
            $table->float('price_cup', 20, 2);
            $table->float('volume', 10, 2);
            $table->integer('year');
            $table->float('strength',10,2);
            $table->text('sort_contain')->nullable();

            $table->integer('country_id')->unsigned()->nullable();
            //$table->foreign('country_id')->references('id')->on('countries')->onDelete('set null');

            $table->integer('color_id')->unsigned()->nullable();
            //$table->foreign('color_id')->references('id')->on('colors')->onDelete('set null');

            $table->integer('sweet_id')->unsigned()->nullable();
            //$table->foreign('sweet_id')->references('id')->on('sweets')->onDelete('set null');

            $table->integer('producer_id')->unsigned()->nullable();
            $table->string('image_src')->nullable();
            $table->boolean('is_active')->default(true);
            $table->integer('id_type')->nullable();
            $table->string('region_name')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('vines');
    }
}
