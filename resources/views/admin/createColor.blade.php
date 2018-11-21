@extends('layouts.admin_panel')
@section('title')
    Создать цвет
@endsection
@section('content')
<div class="row">
    <div class="col col-md-12">
        <form action="{{route('createColor')}}" method="post">
            <div class="form-group">
                <label>Название</label>
                <input type="text" name="name_color" value="{{old('name_color')}}" class="form-control">
            </div>
            <div class="form-group">
                <label>Приоритет</label>
                <input type="number" name="priority" value="{{old('priority')}}" class="form-control int">
            </div>
            {{csrf_field()}}
            <div class="form-group">
                <button type="submit" class="btn btn-success">OK</button>
                <a href="{{route('allColors')}}" class="btn btn-default">Назад</a>
            </div>
        </form>
    </div>
</div>
@endsection
@section('scripts')
    <script type="text/javascript" src="{{URL::asset('admin/js/int_input')}}"></script>
@endsection
