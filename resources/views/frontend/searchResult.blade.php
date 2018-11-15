@extends('layouts.layout')
@section('title')

@endsection
@section('content')
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
