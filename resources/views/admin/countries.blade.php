@extends('layouts.admin_panel')
@include('admin.partials.modal')
@section('title')
Страны
@endsection
@section('content')
<div class="row">
    <div class="col col-md-12">
        <a href="{{route('startCreateCountry')}}" class="btn btn-danger"> <i class="fas fa-plus"></i> Добавить</a>
    </div>
</div>
<div class="row mt-2">
    <div class="col col-md-12">
        <table class="table table-condensed">
            <tr>
                <th>Название</th>
            </tr>
            @foreach ($countries as $country)
            <tr>
                <td>
                    {{$country->name_rus}} {{$country->name_en!=null ? '/'.$country->name_en : ''}}
                </td>
                <td>
                    <a href="{{route('startEditCountry',['id'=>$country->id])}}" class="btn btn-success">
                        <i class="fas fa-edit"></i>Редактировать
                    </a>
                </td>
                <td>
                    <form action="{{route('dropCountry',['id'=>$country->id])}}" method="post">
                        {{csrf_field()}}
                        <button type="submit" class="delete" name="button"> <i class="fas fa-times"></i> Удалить</button>
                    </form>
                </td>
            </tr>
            @endforeach
        </table>
    </div>
</div>
<div class="row">
    <div class="col col-md-6">
        {{$countries->links()}}
    </div>
</div>
@endsection
@section('scripts')
    <script src="{{URL::asset('admin/js/forModal.js')}}"></script>
@endsection
