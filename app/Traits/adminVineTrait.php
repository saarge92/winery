<?php

namespace App\Traits;

use App\vine;

/**
 * Trait для операций с сущностью "вино" администратором
 * 
 * Предоставляет возможность администратору провододить операции с вином
 */
trait adminVineTrait
{
    /**
     * Добавление вина
     * 
     * Функция для сохранения вина в базе
     * 
     * @param Request $request - Request с параметрами для добавления вина
     * @return bool - Возвращает булево значение, сохранено ли значение
     * 
     */
    public function addVine($request) : bool
    {
        $new_vine = new vine();
        $new_vine = $this->initializeVine($new_vine, $request);
        $file = $request->file('image');
        if (isset($file)) {
            $filename = $request->get('name_rus') . '_' . date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();
            $destination = public_path() . '/storage/wines/';
            $file->move($destination, $filename);
            $new_vine->image_src = 'wines/' . $filename;
        }
        $is_saved = $new_vine->save();
        return $is_saved;
    }

    /**
     * Обновление вина
     * 
     * Функция для обновления записи вина
     * 
     * @param Request $request - параметр для обновления вина
     * @return bool - Возвращает булево значение, сохранено ли значение
     */
    public function updateVine($request) : bool
    {
        $id = $request->get('id');
        $editVine = vine::find($id);
        $editVine = $this->initializeVine($editVine, $request);
        $file = $request->file('image');
        if (isset($file)) {
            if ($editVine->image_src != null) {
                $delete_path = public_path() . '/storage/' . $editVine->image_src;
                if (file_exists($delete_path)) {
                    unlink($delete_path);
                }
            }
            $filename = $request->get('name_rus') . '_' . date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();
            $destination = public_path() . '/storage/wines/';
            $file->move($destination, $filename);
            $editVine->image_src = 'wines/' . $filename;
        }
        $is_save = $editVine->save();
        return $is_save;
    }
    /**
     * Удаление вина
     * 
     * Функция для удаления по $id
     *  
     * @param int $id - параметр для удаления
     * @return bool - Возвращает, удалено ли вино
     */
    public function dropVine(int $id) : bool
    {
        $deletedVine = vine::find($id);
        if ($deletedVine != null) {
            if ($deletedVine->image_src != null) {
                $delete_file = public_path() . '/storage/' . $deletedVine->image_src;
                if (file_exists($delete_file)) {
                    unlink($delete_file);
                }
            }
            $is_deleted = $deletedVine->delete();
            return $is_deleted;
        }
        return false;
    }
    /**
     * Функция инициализации вина(1 объекта) для вывода в удобно-читаемый вид
     * 
     * Функция позволяет инициализировать объект-вино для добавления в базу
     * 
     * @param $vine - объект-вино для инициализации
     * @param $request - параметры инициализации
     */
    private function initializeVine($vine, $request)
    {
        $vine->name_rus = $request->get('name_rus');
        $vine->name_en = $request->get('name_en');
        $vine->price = $request->get('price_bottle');
        $vine->price_cup = $request->get('price_glass');
        $vine->volume = $request->get('volume');
        $vine->year = $request->get('year');
        $vine->strength = $request->get('strength');
        $vine->sort_contain = $request->get('sort_contain');
        $vine->country_id = $request->get('country');
        $vine->color_id = $request->get('color');
        $vine->sweet_id = $request->get('sweet');
        $vine->producer_id = $request->get('producer');
        $vine->id_type = $request->get('type_wine');
        $vine->region_name = $request->get('region_name');
        $vine->is_coravin = $request->get('coravin') == 'on' ? true : false;
        return $vine;
    }

    /**
     * Деактивация вина по его id
     * 
     * @param $id - номер вина
     * @return bool - Деактивировано ли вино
     */
    public function disableVine($id) : bool
    {
        $vine = vine::find($id);
        if ($vine != null) {
            $vine->is_active = false;
            $result = $vine->save();
            return $result;
        }
        return false;
    }

    /**
     * Активация вина по его id
     * 
     * @param $id - номер вина
     * @return bool - Активировано ли вино
     */
    public function enableVine($id)
    {
        $vine = vine::find($id);
        if ($vine != null) {
            $vine->is_active = true;
            $vine->save();
            return true;
        }
        return false;
    }
}
