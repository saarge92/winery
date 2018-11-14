<?php

namespace App\Traits;

use App\color;
use App\country;
use App\producer;
use App\sweet;
use App\vine;
use App\type_of_wine;
trait vineTrait
{
    public function getCountryNameRusById($id)
    {
        $country = country::find($id);
        $country != null ? $country_name = $country->name_rus : $country_name = 'Страна не указана';
        return $country_name;
    }

    public function getCountryNameEnById($id)
    {
        $country = country::find($id);
        isset($country) ? $country_name = $country->name_en : $country_name = 'Страна не указана';
        return $country_name;
    }

    public function getColorNameById($id)
    {
        $color = color::find($id);
        $color != null ? $color_name = $color->name : $color_name = 'Цвет не указан';
        return $color_name;
    }

    public function getSweetNameById($id)
    {
        $sweet = sweet::find($id);
        $sweet != null ? $sweet_name = $sweet->name : $sweet_name = 'Сладость не указана';
        return $sweet_name;
    }

    public function getProducersName($id)
    {
        $producer = producer::find($id);
        $producer != null ? $producer_name = $producer->name : $producer_name = 'Производитель не указан';
        return $producer_name;
    }
    public function getTypeOfWine($id)
    {
        $type_w = type_of_wine::find($id);
        $type_w !=null ? $type_name = $type_w->name : $type_name = null;
        return $type_name;
    }
    public function generateListVines($vines)
    {
        $vines_for_review = array();
        foreach ($vines as $vine)
        {
            $row['id'] = $vine->id;
            $row['name_rus'] = $vine->name_rus;
            $row['name_en'] = $vine->name_en;
            $row['price'] = $vine->price;
            $row['price_cup'] = $vine->price_cup;
            $row['volume'] = $vine->volume;
            $row['year'] = $vine->year;
            $row['strength'] = $vine->strength;
            $row['sort_contain'] = $vine->sort_contain;
            $row['image_src'] = $vine->image_src;
            $row['country'] = $this->getCountryNameRusById($vine->country_id);
            $row['country_en'] = $this->getCountryNameEnById($vine->country_id);
            $row['color'] = $this->getColorNameById($vine->color_id);
            $row['sweet'] = $this->getSweetNameById($vine->sweet_id);
            $row['country_en'] = $this->getCountryNameEnById($vine->country_id);
            $row['is_active'] = $vine->is_active;
            $row['producer'] = $this->getProducersName($vine->producer_id);
            $row['type_name'] = $this->getTypeOfWine($vine->id_type);
            $row['region_name'] = $vine->region_name;
            $vines_for_review[] = (object)$row;
        }
        return $vines_for_review;
    }
    public function filterVines($params)
    {
        $vines = new vine;
        $country_select = isset($params['country']) ? $params['country'] : [];
        $color_select = isset($params['color']) ? $params['color'] : [];
        $sweet_select = isset($params['sweet']) ? $params['sweet'] : [];
        $price_min = isset($params['price_min']) ? $params['price_min'] : null;
        $price_max = isset($params['price_max']) ? $params['price_max'] : null;
        $type_of_wine = isset($params['type_of_wine']) ? $params['type_of_wine'] : [];
        if(!empty($type_of_wine))
        {
            $vines = $vines->where(['id_type'=>$type_of_wine]);
        }
        if (!empty($country_select)) {
            $vines = $vines->whereIn('country_id', $country_select);
        }
        if (!empty($color_select)) {
            $vines = $vines->whereIn('color_id', $color_select);
        }
        if (!empty($sweet_select)) {
            $vines = $vines->whereIn('sweet_id', $sweet_select);
        }
        if (!empty($year_select)) {
            $vines = $vines->whereIn('year', $year_select);
        }
        if (isset($price_min)) {
            $vines = $vines->where('price', '>=', $price_min);
        }
        if (isset($price_max)) {
            $vines = $vines->where('price', '<=', $price_max);
        }
        if (isset($volume_min)) {
            $vines = $vines->where('volume', '>=', $volume_min);
        }
        if (isset($volume_max)) {
            $vines = $vines->where('volume', '<=', $volume_max);
        }
        return $vines;
    }
    public function searchSomeWines($request)
    {
        $vines = vine::where('name_rus','LIKE','%'.$request->get('wine_name').'%')
        ->orWhere('name_en', 'LIKE', '%'.$request->get('wine_name').'%')->paginate(1);
        return $vines;
    }
}
