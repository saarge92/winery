<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ColorRequest extends FormRequest
{
     public function authorize()
     {
         return true;
     }
     public function messages()
     {
         return [
             'name_color.required' => 'Название обязательно для заполнения!',
         ];
     }
     /**
      * Get the validation rules that apply to the request.
      *
      * @return array
      */
     public function rules()
     {
         return [
             'name_color' => 'required|min:2|max:255'
         ];
     }
}
