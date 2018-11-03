@extends('layouts.admin_panel')

@section('content')
@if($slider!=null)
<div class="row">
    <div class="col col-md-12">
        <form action="{{route('postEditSlider',['id'=>$slider->id])}}" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label>Название слайдера (необязательно)</label>
                <input type="text" name="content" value="{{$slider->content}}" class="form-control">
            </div>
            <div class="form-group">
                <img src="{{Storage::url($slider->src_image)}}" style="max-width:12rem"><br>
                <label>Изображение (если хотите поменять)</label><br>
                <input type="file" name="src_image">
            </div>
            <div class="">
                <label for=""></label>
                <input type="checkbox" name="is_active" value="1" {{$slider->is_active == true ? 'checked' : ''}}>Активен?
            </div>
            {{csrf_field()}}
            <div class="form-group">
                <button type="submit" class="btn btn-success">OK</button>
                <a href="{{route('allSliders')}}" class="btn btn-default">Назад</a>
            </div>
        </form>
    </div>
</div>
@endif
@endsection
