@extends('layouts.admin_panel')
@section('title')
    Цвета вин
@endsection
@include('admin.partials.modal')
@section('content')
    <div class="container mt-2">
        <div class="row">
            <div class="col-md-4">
                <a href="{{route('startCreateColor')}}" class="btn btn-danger">
                    <i class="fas fa-plus"></i>Добавить
                </a>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col col-md-12">
                <table class="table table-striped">
                    <tr>
                        <th>Название</th>
                    </tr>
                    @foreach ($colors as $color)
                        <tr>
                            <td>
                                {{$color->name}}
                            </td>
                            <td>
                                <a href="{{route('startEditColor',['id'=>$color->id])}}" class="btn btn-success">Редактировать</a>
                            </td>
                            <td>
                                <form action="{{route('dropColor',['id'=>$color->id])}}" method="post">
                                    {{csrf_field()}}
                                    <button type="submit" name="button" class="delete"><i class="fas fa-times"></i> Удалить</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col col-md-12">
                {{$colors->links()}}
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script src="{{URL::asset('admin/js/forModal.js')}}"></script>
@endsection
