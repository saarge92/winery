@extends('layouts.admin_panel')

@section('content')
<div class="row">
    <div class="col col-md-12">
        <form action="{{route('editColor',['id'=>$color->id])}}" method="post">
            <div class="form-group">
                <label>Название</label>
                <input type="text" name="name_color" value="{{$color->name}}" class="form-control">
            </div>
            <div class="form-group">
                <label>Название</label>
                <input type="text" name="priority" value="{{$color->priority}}" class="int form-control">
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
