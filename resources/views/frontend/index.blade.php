@extends('layouts.layout')
@section('title')
Винная карта BarHouse
@endsection

{{-- @include('frontend.partials.loader') --}}
@section('content')
@include('frontend.partials.slider')
@include('frontend.partials.countOfFilter')
@include('frontend.partials.modalWine')
<div>
    @include('frontend.partials.loader')
    <div class="container">
        @include('frontend.partials.searchWines')
        <div class="row">
            <div class="col-lg-3 my-2">
                @include('frontend.partials.form_filter')
            </div>
            <div class="col-lg-9">
                @include('frontend.partials.listVines')
            </div>
        </div>
    </div>

</div>
@endsection
@section('scripts')
<script type="text/javascript">
    var maxPriceEnable = {{ $max_price }};
    var minPriceEnable = {{ $min_price }};
    var current_minPrice = {{ isset($_GET['price_min']) ? $_GET['price_min'] : $min_price }};
    var currentMaxPrice = {{ isset($_GET['price_max']) ? $_GET['price_max'] : $max_price }};
    var searchLink = 'viewWine/';
</script>
<script type="text/javascript" src="{{URL::asset('js/slider.js')}}"></script>
<script type="text/javascript" src="{{URL::asset('js/autocompleteWine.js')}}"></script>
<script type="text/javascript" src="{{URL::asset('frontend/js/modalWine.js')}}"></script>
@endsection
