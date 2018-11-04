@extends('layouts.layout')
@section('title')
Винная карта BarHouse
@endsection

{{-- @include('frontend.partials.loader') --}}
@section('content')
    @include('frontend.partials.slider')
    @include('frontend.partials.countOfFilter')
<div id="vines">
    @include('frontend.partials.loader')
    <v-container>
        @include('frontend.partials.searchWines')
        <v-layout row wrap>
            <v-flex md2 my-2>
                @include('frontend.partials.form_filter')
            </v-flex>
            <v-flex md10>
                @include('frontend.partials.listVines')
            </v-flex>
        </v-layout>
    </v-container>

</div>
@endsection
@section('scripts')
    <script type="text/javascript">
        var maxPriceEnable = {{$max_price}};
        var minPriceEnable = {{$min_price}};
        var current_minPrice = {{isset($params['price_min']) ? $params['price_min'] : $min_price}};
        var currentMaxPrice = {{isset($params['price_max']) ? $params['price_max'] : $max_price}};

        var maxVolumeEnable = {{$volume_max}};
        var minVolumeEnable = {{$volume_min}};
        var current_minVolume = {{isset($params['volume_min']) ? $params['volume_min'] : $volume_min}};
        var current_maxVolume = {{isset($params['volume_max']) ? $params['volume_max'] : $volume_max}};
    </script>
    <script type="text/javascript" src="{{URL::asset('js/slider.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('js/filter.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('js/autocompleteWine.js')}}"></script>
@endsection