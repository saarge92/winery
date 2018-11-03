@extends('layouts.admin_panel')

@section('content')
<div class="row">
    <div class="col col-md-12">
        <form action="{{route('postCreateSlider')}}" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label>Название слайдера (необязательно)</label>
                <input type="text" name="content" value="{{old('content')}}" class="form-control">
            </div>
            <div class="form-group">
                <label>Изображение</label><br>
                <input type="file" name="src_image">
            </div>
            <div class="">
                <label for=""></label>
                <input type="checkbox" name="is_active" value="1" checked>Активен?
            </div>
            {{csrf_field()}}
            <div class="form-group">
                <button type="submit" class="btn btn-success">OK</button>
                <a href="{{route('allSliders')}}" class="btn btn-default">Назад</a>
            </div>
        </form>
    </div>
</div>
@endsection
