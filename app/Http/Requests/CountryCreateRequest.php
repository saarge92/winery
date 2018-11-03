<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CountryCreateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    public function messages()
    {
        return [
            'name_rus.required' => 'Название (по русски) обязательно для заполнения!',
        ];
    }

    public function rules()
    {
        return [
            'name_rus' => 'required|min:2|max:255',
        ];
    }
}
