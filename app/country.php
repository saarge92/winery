<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class country extends Model
{
    public $table = "countries";
    protected $fillable = ['name_rus','name_en'];
}
