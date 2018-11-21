@extends('layouts.admin_panel')
@section('title')
Слайдеры
@endsection
@include('admin.partials.modal')
@section('content')
<div class="row">
    <div class="col col-md-12">
        <a href="{{route('startCreateSlider')}}" class="btn btn-danger"> <i class="fas fa-plus"></i> Добавить</a>
    </div>
</div>
<div class="row mt-2">
    <div class="col col-md-12">
        <table class="table table-condensed">
            <tr>
                <th>Фото</th>
                <th>Название</th>
            </tr>
            @foreach ($sliders as $slider)
                <tr>
                    <td>
                        <img src="{{Storage::url($slider->src_image)}}" style="max-width:5rem;">
                    </td>
                    <td>
                        {{$slider->content ? $slider->content : 'Нет'}}
                    </td>
                    <td>
                        <a href="{{route('getEditSlider',['id'=>$slider->id])}}" class="btn btn-success">
                            <i class="fas fa-edit"></i>Редактировать
                        </a>
                    </td>
                    <td>
                        <form action="{{route('dropSlider',['id'=>$slider->id])}}" method="post">
                            {{csrf_field()}}
                            <button type="submit" class="delete"> <i class="fas fa-times"></i> Удалить</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </table>
    </div>
</div>
<div class="row">
    <div class="col col-md-6">
        {{$sliders->links()}}
    </div>
</div>
@endsection
@section('scripts')
    <script src="{{URL::asset('admin/js/forModal.js')}}"></script>
@endsection
