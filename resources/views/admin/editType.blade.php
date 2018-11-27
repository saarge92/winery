@extends('layouts.admin_panel')
@section('title')
    Редактирование типа
@endsection
@section('content')
@if($tw!=null)
    <div class="row">
        <div class="col col-md-12">
            <form action="{{route('editType',['id'=>$tw->id])}}" method="post">
                <div class="form-group">
                    <label>Название</label>
                    <input type="text" name="name_color" value="{{$tw->name}}" class="form-control">
                </div>
                {{csrf_field()}}
                <div class="form-group">
                    <button type="submit" class="btn btn-success">OK</button>
                    <a href="{{route('all_types')}}" class="btn btn-default">Назад</a>
                </div>
            </form>
        </div>
    </div>
@else
    <p>Запись отсутсвует в базе</p>
@endif
@endsection
