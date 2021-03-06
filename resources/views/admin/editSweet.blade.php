@extends('layouts.admin_panel')

@section('content')
<div class="row">
    <div class="col col-md-12">
        <form action="{{route('editSweet',['id'=>$sweet->id])}}" method="post">
            <div class="form-group">
                <label>Название</label>
                <input type="text" name="name_sweet" value="{{$sweet->name}}" class="form-control">
            </div>
            {{csrf_field()}}
            <div class="form-group">
                <button type="submit" class="btn btn-success">OK</button>
                <a href="{{route('allSweets')}}" class="btn btn-default">Назад</a>
            </div>
        </form>
    </div>
</div>
@endsection
