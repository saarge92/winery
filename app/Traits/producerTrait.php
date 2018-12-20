<?php

namespace App\Traits;

use App\producer;

// use Illuminate\Support\Facades\File;

trait producerTrait
{
    public function addProducer($req)
    {
        $producer = new producer();
        $producer->name = $req->get('name_producer');
        $result = $producer->save();
        return $result;
    }
    public function editProducerPost($request, $id)
    {
        $producer = producer::find($id);
        if ($producer != null) {
            $producer->name = $request->get('name_producer');
            $result = $producer->save();
            return $result;
        }
        return false;
    }
    public function deleteProducer($id)
    {
        $producer = producer::find($id);
        if (isset($producer)) {
            $result = $producer->delete();
            return $result;
        }
        return $result;
    }
}
