@extends('layouts.admin_panel')
@section('title')
Производители вин
@endsection
@section('content')
<div class="row">
    <div class="col col-md-12">
        <a href="{{route('startCreateProducer')}}" class="btn btn-danger"> <i class="fas fa-plus"></i> Добавить</a>
    </div>
</div>
<div class="row mt-2">
    <div class="col col-md-12">
        <table class="table table-condensed">
            <tr>
                <th>Название</th>
            </tr>
            @foreach ($producers as $producer)
            <tr>
                <td>
                    {{$producer->name}}
                </td>
                <td>
                    <a href="{{route('editProducer',['id'=>$producer->id])}}" class="btn btn-success">
                        <i class="fas fa-edit"></i>Редактировать
                    </a>
                </td>
                <td>
                    <form action="{{route('dropProducer',['id'=>$producer->id])}}" method="post">
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
    <div class="col col-md-6">
        {{$producers->links()}}
    </div>
</div>
@endsection
