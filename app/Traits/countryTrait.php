<?php

namespace App\Traits;

use App\country;

// use Illuminate\Support\Facades\File;

trait countryTrait
{
    public function addCountry($req)
    {
        $result = country::create([
            'name_rus' => $req->get('name_rus'),
            'name_en' => $req->get('name_en')
        ])->save();
        return $result;
    }
    public function editCountryPost($request, $id)
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
    public function deleteCountry($id)
    {
        $country = country::find($id);
        if (isset($country)) {
            $result = $country->delete();
            return $result;
        }
        return $result;
    }
}
