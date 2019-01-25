<?php

namespace App\Traits;

use App\country;
use Illuminate\Http\Request;

/**
 * Trait для работы со странами вин
 * 
 * Trait содержит базовые операции с сущностью "Страны вин"
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
trait countryTrait
{
    /**
     * Добавление Страны вина
     * 
     * @param Request $req - список параметров
     * @return bool $result - Добавлена ли страна
     */
    public function addCountry($req) : bool
    {
        $result = country::create([
            'name_rus' => $req->get('name_rus'),
            'name_en' => $req->get('name_en')
        ])->save();
        return $result;
    }

    /**
     * Редактирование страны
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер вина
     * @return bool $result - Редактирована ли страна
     */
    public function editCountryPost(Request $request, int $id) : bool
    {
        $country = country::find($id);
        if ($country != null) {
            $country->name_rus = $request->get('name_rus');
            $country->name_en = $request->get('name_en');
            $result = $country->save();
            return $result;
        }
        return false;
    }

    /**
     * Удаление страны вина
     * 
     * @param Request $request - параметры запроса
     * @param int $id - id номер страны
     * @return bool $result - Редактирована ли страна
     */
    public function deleteCountry(int $id) : bool
    {
        $country = country::find($id);
        if (isset($country)) {
            $result = $country->delete();
            return $result;
        }
        return $result;
    }
}
