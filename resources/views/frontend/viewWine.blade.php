@extends('layouts.layout') 
@section('title') Вино
@endsection
 
@section('content') @if(count($vine)>0)
<div class="row my-2 mr-1">
    <div class="col-lg-12">
        <div class="card my-2">
            <div class="card-vine-header">
                @if($vine->is_coravin == 1)
                <img class="coravin" src="{{asset('icons/Coravin.png')}}" alt=""> @endif
                <span class="volume_info"><i class="fas fa-wine-bottle"></i>{{$vine->volume / 1000}} л </span>
            </div>
            <div class="img-holder">
                @if($vine->image_src!=null)
                <img src="{{Storage::url($vine->image_src)}}" class="wine_img"> @else
                <img src="{{Storage::url('projectFolders/unknow.png')}}" class="wine_img"> @endif
            </div>
            <div class="description">
                <div class="name_rus">
                    {{$vine->name_rus}}
                </div>
                @if($vine->name_en != null)
                <div class="name_rus">
                    {{$vine->name_en}}
                </div>
                @endif @if($vine->year)
                <span>
                                {{$vine->year.'г'}}
                            </span> @endif
            </div>
            <div class="info-wine">
                <div class="text-center">
                    <span class="country_wine">
                            {{$vine->country}}
                            {{$vine->country_en ? ','.$vine->country_en : ''}}
                        </span>
                </div>
                <div class="region_name">
                    {{$vine->region_name}}
                </div>
                <div class="text-center">
                    <span class="color_wine">{{$vine->color}}</span>
                    <span class="sweet_wine">{{$vine->sweet}}</span>
                </div>
            </div>
            <div class="price">
                Цена за бутылку
                <span class="price_bottle">
                        {{$vine->price}} <i class="fas fa-ruble-sign"></i>
                    </span>
            </div>

            <div class="price">
                @if($vine->price_cup != null) Цена за бокал :
                <span class="price_cup">
                            {{$vine->price_cup}} <i class="fas fa-ruble-sign"></i>
                        </span> @endif
            </div>
            <input type="hidden" class="strength" value="{{$vine->strength}}" />
            <input type="hidden" class="year" value="{{$vine->year}}" />
            <input type="hidden" class="sort_contain" value="{{$vine->sort_contain}}">
            <input type="hidden" class="producer" value="{{$vine->producer}}">
            <div class="view_button">
                <button class="btn btn-warning wine">
                        <i class="fas fa-search-plus"></i>Посмотреть
                    </button>
            </div>
        </div>
    </div>
</div>
@else
<div>К сожалению, вино отсутствует в базе</div>
@endif
@endsection