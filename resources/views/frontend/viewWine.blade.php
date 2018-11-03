@extends('layouts.layout')

@section('content')
@if($vine!=null)
<div class="info_wine">
    <div class="container">
        <div class="row">
            <div class="col col-md-6">
                @if($vine->image_src!=null)
                    <img src="{{Storage::url($vine->image_src)}}" alt="">
                    @else
                    <img src="{{Storage::url('projectFolders/unknow.png')}}" alt="">
                    @endif
            </div>
            <div class="col col-md-6">
                <div class="row">
                    <div class="col col-md-4">
                        <i class="fas fa-thermometer-quarter"></i>{{$vine->color}} {{$vine->sweet}}
                    </div>
                    <div class="col col-md-4">
                        <i class="fas fa-map-marker"></i>{{$vine->country}} {{$vine->country_en ? '/'.$vine->country_en : ''}}
                    </div>
                    <div class="col col-md-4">
                        <i class="fas fa-wine-bottle"></i>{{$vine->volume}}
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-12 col-md-offset-4">
                        <i class="fas fa-money-bill-alt"></i>Цена : {{$vine->price}}
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-4">
                        Производитель :
                    </div>
                    <div class="col md-6">
                        {{$vine->producer}}
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-4">
                        Год :
                    </div>
                    <div class="col col-md-6">
                        {{$vine->year}}
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-4">
                        Крепость
                    </div>
                    <div class="col col-md-6">
                        {{$vine->strength}} %
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-4">
                        Сортовой состав
                    </div>
                    <div class="col col-md-6">
                        {{$vine->sort_contain}}
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-6 col-md-offset-3">
                        <a href="{{route('home')}}#vines" class="btn btn-primary">
                            <i class="fas fa-backward"></i> К списку вин
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div @endif
@endsection
