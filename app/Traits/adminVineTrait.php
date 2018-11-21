<?php

namespace App\Traits;

use App\vine;
// use Illuminate\Support\Facades\File;

trait adminVineTrait
{
    public function addVine($request)
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

    public function updateVine($request)
    {
        $id = $request->get('id');
        $editVine = vine::find($id);
        $editVine = $this->initializeVine($editVine, $request);
        $file = $request->file('image');
        if ($file) {
            if($editVine->image_sc != null)
            {
                unlink(public_path().'/storage/'.$editVine->image_src);
            }
            $filename = $request->get('name_rus') . '_' . date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();
            $destination = public_path() . '/storage/wines/';
            $file->move($destination, $filename);
            $editVine->image_src = 'wines/' . $filename;
        }
        $is_save = $editVine->save();
        return $is_save;
    }

    public function dropVine($id)
    {
        $deletedVine = vine::find($id);
        if($deletedVine!=null)
        {
            if($deletedVine->image_src!=null){
                unlink(public_path().'/storage/'.$deletedVine->image_src);
            }
            $is_deleted = $deletedVine->delete();
            return $is_deleted;
        }
        return false;
    }

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
        return $vine;
    }

    public function disableVine($id)
    {
        $vine = vine::find($id);
        if ($vine != null) {
            $vine->is_active = false;
            $result = $vine->save();
            return $result;
        }
        return false;
    }
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
