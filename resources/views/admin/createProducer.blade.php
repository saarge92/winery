@extends('layouts.admin_panel')

@section('content')
<div class="row">
    <div class="col col-md-12">
        <form action="{{route('createProducer')}}" method="post">
            <div class="form-group">
                <label>Название производителя</label>
                <input type="text" name="name_producer" value="{{old('name_producer')}}" class="form-control">
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
