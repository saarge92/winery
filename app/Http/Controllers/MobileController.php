<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\type_of_wine;
use App\sweet;
use App\producer;
//Public Api for mobile application
class MobileController extends Controller
{
    //Get all types of wines
    private $header_info;
    public function __construct()
    {
        $this->header_info = ['Content-Type' => 'application/json;charset=UTF-8', 'charset' => 'utf-8'];
    }
    public function getAllTypes()
    {
        $all_types = type_of_wine::all();
        return response()->json($all_types, 200, $this->header_info, JSON_UNESCAPED_UNICODE);
    }
    public function getAllSweets()
    {
        $all_sweets = sweet::all();
        return response()->json($all_sweets, 200, $this->header_info, JSON_UNESCAPED_UNICODE);
    }
    public function getAllProducers()
    {
        $all_producers = producer::all();
        return response()->json($all_producers, 200, $this->header_info, JSON_UNESCAPED_UNICODE);
    }
}
