@extends('layouts.admin_panel')

@section('content')
<div class="row">
    <div class="col col-md-12">
        <form action="{{route('postEditProducer',['id'=>$producer->id])}}" method="post">
            <div class="form-group">
                <label>Страна (по русски)*</label>
                <input type="text" name="name_producer" value="{{$producer->name}}" class="form-control">
            </div>
            {{csrf_field()}}
            <div class="form-group">
                <button type="submit" class="btn btn-success">OK</button>
                <a href="{{route('producers')}}" class="btn btn-default">Назад</a>
            </div>
        </form>
    </div>
</div>
@endsection
