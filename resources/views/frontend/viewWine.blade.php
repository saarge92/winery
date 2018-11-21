@extends('layouts.layout')
@section('title')
Вино
@endsection

@section('content')
@if(count($vine)>0)
    <div class="row my-2 mr-1">
        <div class="col-lg-12">
            <div class="card">
                <div class="text-right volume">
                    <i class="fas fa-wine-bottle"></i>{{$vine->volume / 1000}} л
                </div>
                <div class="img-holder">
                    @if($vine->image_src!=null)
                        <img src="{{Storage::url($vine->image_src)}}" class="wine_img">
                        @else
                        <img src="{{Storage::url('projectFolders/unknow.png')}}" class="wine_img">
                        @endif
                </div>
                <div class="description">
                    <p>
                        <span class="name_rus">{{$vine->name_rus}}</span>
                        {{$vine->name_en ? ','.$vine->name_en : ''}},
                    </p>
                </div>
                <div class="info-wine">
                    <div class="row">
                        <div class="col-lg-8 col-8">
                            <span class="color_wine">{{$vine->color}}</span>,
                            <span class="sweet_wine">{{$vine->type_name ? $vine->type_name : $vine->sweet}}</span>
                        </div>
                        <div class="country_wine">
                            {{$vine->country}}
                        </div>
                    </div>
                    <div class="region_name">
                        {{$vine->region_name}}
                    </div>
                </div>
                <div class="price">
                    Цена за бутылку
                    <span class="price_bottle">
                        {{$vine->price}} <i class="fas fa-ruble-sign"></i>
                    </span>
                </div>

                <div class="price">
                    Цена за бокал :
                    <span class="price_cup">
                        {{$vine->price_cup}} <i class="fas fa-ruble-sign"></i>
                    </span>
                </div>
                <input type="hidden" class="strength" value="{{$vine->strength}}" />
                <input type="hidden" class="year" value="{{$vine->year}}" />
                <input type="hidden" class="sort_contain" value="{{$vine->sort_contain}}">
                <div class="view_button">
                    <button class="btn btn-warning wine">
                        <i class="fas fa-search-plus"></i>Посмотреть
                    </button>
                </div>
            </div>
        </div>
    </div>
    @else
    <div>К сожалению, ничего не найдено</div>
    @endif
    @endsection
