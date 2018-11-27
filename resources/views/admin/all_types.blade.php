@extends('layouts.admin_panel')
@section('title')
Типы вин
@endsection
@include('admin.partials.modal')
@section('content')
<div class="container mt-2">
    <div class="row">
        <div class="col-md-4">
            <a href="{{route('startCreateTypeWine')}}" class="btn btn-danger">
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
                @foreach ($types_of_wines as $tw)
                <tr>
                    <td>
                        {{$tw->name}}
                    </td>
                    <td>
                        <a href="{{route('getEditType',['id'=>$tw->id])}}" class="btn btn-primary">
                            Редактировать
                        </a>
                    </td>
                    <td>
                        <form action="{{route('dropType',['id'=>$tw->id])}}" method="post">
                            {{csrf_field()}}
                            <button type="submit" name="button" class="delete btn btn-default"><i class="fas fa-times"></i> Удалить</button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col col-md-12">
            {{$types_of_wines->links()}}
        </div>
    </div>
</div>
@endsection
@section('scripts')
<script src="{{URL::asset('admin/js/forModal.js')}}"></script>
@endsection
