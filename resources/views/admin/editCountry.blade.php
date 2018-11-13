@extends('layouts.admin_panel')

@section('content')
    <div class="row">
        <div class="col col-md-12">
            <form action="{{route('editCountry',['id'=>$country->id])}}" method="post">
                <div class="form-group">
                    <label>Страна (по русски)*</label>
                    <input type="text" name="name_rus" value="{{$country->name_rus}}" class="form-control">
                </div>
                <div class="form-group">
                    <label>Страна (по английски)</label>
                    <input type="text" name="name_en" value="{{$country->name_en}}" class="form-control">
                </div>
                {{csrf_field()}}
                <div class="form-group">
                    <button type="submit" class="btn btn-success">OK</button>
                    <a href="{{route('all_countries')}}" class="btn btn-default">Назад</a>
                </div>
            </form>
        </div>
    </div>
@endsection
