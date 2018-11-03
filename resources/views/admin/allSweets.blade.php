@extends('layouts.admin_panel')
@section('title')
Цвета вин
@endsection
@section('content')
<div class="container mt-2">
    <div class="row">
        <div class="col-md-4">
            <a href="{{route('startCreateSweet')}}" class="btn btn-danger">
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
                @foreach ($sweets as $sweet)
                <tr>
                    <td>
                        {{$sweet->name}}
                    </td>
                    <td>
                        <a href="{{route('startEditSweet',['id'=>$sweet->id])}}" class="btn btn-success">Редактировать</a>
                    </td>
                    <td>
                        <form action="{{route('dropSweet',['id'=>$sweet->id])}}" method="post">
                            {{csrf_field()}}
                            <button type="submit" name="button"> <i class="fas fa-times"></i> Удалить</button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col col-md-12">
            {{$sweets->links()}}
        </div>
    </div>
</div>
@endsection
