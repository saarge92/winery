@include('admin.partials.modal')
@extends('layouts.admin_panel')

@section('content')

<div class="row">
    <div class="col col-md-4">
        <a class="btn text-white btn-danger" href="{{route('createVine')}}">
            <i class="fas fa-plus"></i>Добавить вино
        </a>
        <a class="" href="{{route('allSweets')}}">
            Сладость вин
        </a>
        <a class="" href="{{route('allColors')}}">
            Цвета вин
        </a>
    </div>
</div>
@foreach ($vines_for_review->chunk(3) as $vine_chink)
<div class="row">
    @foreach($vine_chink as $vine)
    <div class="col col-xs-3 col-md-4 col-sm-6 mb-3 mt-2 {{ $vine->status ? '' : 'inactive' }}">
        <div class="pull-right">
            @include('admin.partials.activate_disable_vine')
            <div class="image-holder">
                <img src="{{$vine->image_src ? Storage::url($vine->image_src) : Storage::url('projectFolders/unknow.png')}}">
            </div>
            <div class="description">
                <div>{{$vine->name_rus}}</div>
                <div>
                    <div>{{$vine->color}} {{$vine->sweet}}</div>
                    <div>{{$vine->country}} {{$vine->year}}</div>
                    <div>{{$vine->price}} руб</div>
                </div>
                <div>
                    <a href="{{route('editVine',['id'=>$vine->id])}}" class="text-white btn btn-success">
                        <i class="fas fa-search-plus"></i> Посмотреть
                    </a>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    @endforeach
    @endsection

    @section('scripts')
    <script src="{{URL::asset('admin/js/forModal.js')}}"></script>
    @endsection
