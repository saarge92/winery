@include('admin.partials.modal')
@extends('layouts.admin_panel')
@section('styles')
<link rel="stylesheet" href="{{URL::asset('frontend/css/bootstrap.slider.min.css')}}">
@endsection
@section('content')
@include('frontend.partials.countOfFilter')
@include('frontend.partials.loader')
<div class="row">
    <div class="col-lg-3">
        <a class="btn text-white btn-danger" href="{{route('createVine')}}">
            <i class="fas fa-plus"></i>Добавить вино
        </a>
    </div>
    <div class="col-lg-9">
        @include('admin.partials.searchWines')
    </div>
    {{-- <div class="col-md-4">
            <a class="btn btn-outline-secondary" href="{{route('allSweets')}}">
    Сладость вин
    </a>
</div>
<div class="col-md-4">
    <a class="btn btn-outline-secondary" href="{{route('allColors')}}">
        Цвета вин
    </a>
</div> --}}
</div>
<div class="row">
    <div class="col-lg-3 mt-2">
        @include('admin.partials.form_filter')
    </div>
    <div class="col-lg-9">
        @include('admin.partials.listVinesAdmin')
    </div>
</div>

@endsection

@section('scripts')
<script src="{{URL::asset('admin/js/forModal.js')}}"></script>
<script type="text/javascript">
    var maxPriceEnable = {{ $max_price }};
    var minPriceEnable = {{ $min_price }};
    var current_minPrice = {{ isset($_GET['price_min']) ? $_GET['price_min'] : $min_price }};
    var currentMaxPrice = {{ isset($_GET['price_max']) ? $_GET['price_max'] : $max_price }};
    var searchLink = 'editVine/';
</script>
<script type="text/javascript" src="{{URL::asset('js/slider.js')}}"></script>
<script type="text/javascript" src="{{URL::asset('js/filter.js')}}"></script>
<script type="text/javascript" src="{{URL::asset('js/autocompleteWine.js')}}"></script>
<script type="text/javascript" src="{{URL::asset('frontend/js/bootstrap.slider.min.js')}}"></script>
@endsection
