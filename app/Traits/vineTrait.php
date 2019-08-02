<?php

namespace App\Traits;

use App\color;
use App\country;
use App\producer;
use App\sweet;
use App\vine;
use App\type_of_wine;

/**
 * Трейт предназначен для работы с сущностью "Вино"
 * 
 * Содержит набор функций для работы
 */
trait vineTrait
{
    /**
     * Получение названия вина (по русски) по id
     * 
     * Возвращает либо string либо null
     * 
     * @param int $id - входной параметр для поиска вина
     * @return mixed
     */
    public function getCountryNameRusById($id): string
    {
        $country = country::find($id);
        $country != null ? ($country_name = $country->name_rus != null ? $country->name_rus : '') : $country_name = 'Страна не найдена';
        return $country_name;
    }

    /**
     * Получение названия вина (по-английский) по id
     * 
     * Возвращает либо string либо null
     * 
     * @param int $id - входной параметр для поиска вина
     * @return string
     */
    public function getCountryNameEnById($id): string
    {
        $country = country::find($id);
        isset($country) ? $country_name = ($country->name_en != null ? $country->name_en : '') : $country_name = 'Страна не указана';
        return $country_name;
    }

    /**
     * Возвращает цвет вина по id
     * 
     * Возвращает либо string либо null
     * 
     * @param int $id - входной параметр для поиска вина
     * @return string
     */
    public function getColorNameById($id): string
    {
        $color = color::find($id);
        $color != null ? $color_name = $color->name : $color_name = 'Цвет не указан';
        return $color_name;
    }

    /**
     * Возвращает название "Сладости вина" по id
     * 
     * @param int $id - Входной параметр $id вина
     * @return string
     */
    public function getSweetNameById($id)
    {
        $sweet = sweet::find($id);
        $sweet != null ? $sweet_name = $sweet->name : $sweet_name = 'Сладость не указана';
        return $sweet_name;
    }

    /**
     * Возвращает производителя вина по id вина
     * 
     * @param int $id - входной параметр - id вина
     * @return string
     */
    public function getProducersName($id): string
    {
        $producer = producer::find($id);
        $producer != null ? $producer_name = $producer->name : $producer_name = 'Производитель Не указан';
        return $producer_name;
    }
    /**
     * Возвращает тип вина по id вина
     * 
     * Возвращает либо название типа вина , либо null
     * 
     * @param int $id - id вина
     * @return string
     */
    public function getTypeOfWine($id): ?string
    {
        $type_w = type_of_wine::find($id);
        $type_w != null ? $type_name = $type_w->name : $type_name = null;
        return $type_name;
    }

    /**
     * Возвращает приоритет цвета вина
     * 
     * @param int $id_color - id цвета
     * 
     * @deprecated
     * @return string
     */
    public function getPriorityColorNumber($id_color): ?string
    {
        $color = color::find($id_color);
        $color !== null ? $priority_num = $color->priority : $priority_num = null;
        return $priority_num;
    }
    /**
     * Формирует и инииализирует список вина в соответствующий вин
     * 
     * @param array $vines - список записей из бд
     * @return array
     */
    public function generateListVines($vines): array
    {
        $vines_for_review = array();
        foreach ($vines as $vine) {
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
            $row['is_coravin'] = $vine->is_coravin;
            $vines_for_review[] = (object) $row;
        }
        return $vines_for_review;
    }
    /**
     * Сортировка вин по цветовому приоритету
     * @deprecated
     */
    private function sort_by_priority($_vines)
    {
        usort($_vines, function ($a, $b) {
            return $a->priority > $b->priority;
        });
        return $_vines;
    }
    /**
     * Фильтрация вин согласно параметров
     * 
     * @param array $params - список параметров для фильтрации
     * 
     * @return object
     */
    public function filterVines($params)
    {
        $vines = new vine;
        $country_select = isset($params['country']) ? $params['country'] : [];
        $color_select = isset($params['color']) ? $params['color'] : [];
        $sweet_select = isset($params['sweet']) ? $params['sweet'] : [];
        $price_min = isset($params['price_min']) ? $params['price_min'] : null;
        $price_max = isset($params['price_max']) ? $params['price_max'] : null;
        $type_of_wine = isset($params['types_wines']) ? $params['types_wines'] : [];
        if (!empty($type_of_wine)) {
            $vines = $vines->whereIn('id_type', $type_of_wine);
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
        if (isset($price_min)) {
            $vines = $vines->where('price', '>=', $price_min);
        }
        if (isset($price_max)) {
            $vines = $vines->where('price', '<=', $price_max);
        }
        return $vines;
    }
    /**
     * Поиск вина 
     * 
     * @param mixed $request - параметр поиска
     * @return object
     */
    public function searchSomeWines($request)
    {
        $vines = vine::where('is_active', true)->where('name_rus', 'LIKE', '%' . $request->get('wine_name') . '%')
            ->orWhere('name_en', 'LIKE', '%' . $request->get('wine_name') . '%');
        return $vines;
    }
}
