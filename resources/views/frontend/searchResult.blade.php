@extends('layouts.layout')
@section('title')
Результат поиска
@endsection

@section('content')
    @include('frontend.partials.modalWine')
<div class="search_result">
    <div class="container my-5">
        @include('frontend.partials.listVines')
        <div class="row">
            <div class="col col-md-12">
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script type="text/javascript" src="{{URL::asset('frontend/js/modalWine.js')}}"></script>
@endsection
