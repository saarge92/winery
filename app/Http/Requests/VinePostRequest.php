<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VinePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    public function messages()
    {
        return [
            'name_rus.required' => 'Название обязательно для заполнения!',
            'volume.required' => 'Объем обязателен для заполнения',
            'price_bottle.required' => 'Цена за бутылку обязательно для заполнения',
            'strength.required' => 'Крепость обязательно для заполнения',
            'price_glass.required' => 'Цена за бокал обязательно',
            'volume.numeric' => 'Должно быть число',
            'price_bottle.numeric' => 'Должно быть число',
            'strength.numeric' => 'Должно быть число',
            'price_glass.numeric' => 'Должно быть число'
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
            'name_rus' => 'required|min:2|max:255',
            'volume' => 'required|numeric',
            'price_bottle' => 'required|numeric',
            'strength' => 'required|numeric',
            'price_glass'=>'required|numeric'
        ];
    }
}
