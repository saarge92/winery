@extends('layouts.layout')
@section('title')
Результат поиска
@endsection

@section('content')
    @if(count($vines_for_review)>0)
        Результаты по поиску : {{$_GET['wine_name']}}
        @include('frontend.partials.listVines')
    @else
        <div>К сожалению, ничего не найдено</div>
    @endif
@endsection
