@extends('layouts.layout')
@section('title')
Винная карта BarHouse
@endsection

{{-- @include('frontend.partials.loader') --}}
@section('content')
    @include('frontend.partials.slider')
    @include('frontend.partials.countOfFilter')
    @include('frontend.partials.searchWines')

<div id="vines">
    @include('frontend.partials.listVines')
</div>
@endsection
