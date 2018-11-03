<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\producer;
use App\Traits\producerTrait;
use App\Http\Requests\ProducerRequest;
use Illuminate\Support\Facades\Session;

class ProducerController extends Controller
{
    use producerTrait;
    public function getProducers()
    {
        $producers = producer::orderby('name', 'asc')->paginate(4);
        return view('admin.producers', ['producers'=>$producers]);
    }
    public function startCreateProducer()
    {
        return view('admin.createProducer');
    }
    public function createProducer(ProducerRequest $request)
    {
        if ($request->validated()) {
            $result = $this->addProducer($request);
            $result == true ? Session::flash('success', 'Страна '.$request->get('name_rus').' успешно обновлено')
                : Session::flash('error', 'Произошла ошибка, обратитесь к разработчику сайта!');
            return redirect('producers');
        }
        return redirect()->back();
    }
    public function startEdit(Request $request, $id)
    {
        $producer = producer::find($id);
        return view('admin.editProducer', ['producer'=>$producer]);
    }
    public function editProducer(ProducerRequest $request, $id)
    {
        if ($request->validated()) {
            $result = $this->editProducerPost($request, $id);
            $result == true ? Session::flash('success', 'Произодитель '.$request->get('name_producer').' успешно обновлено')
                : Session::flash('error', 'Произошла ошибка!');
            return redirect('producers');
        }
        return redirect('countries');
    }
    public function dropProducer(Request $req, $id)
    {
        $this->deleteProducer($id) == true ? Session::flash('success', 'Производитель успешно успешно')
        : Session::flash('error', 'Ошибка при удалении');
        return redirect()->back();
    }
}
