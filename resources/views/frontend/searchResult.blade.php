@extends('layouts.layout')
@section('title')

@endsection
@section('content')
<div class="search_result">
    <div class="container">
        @include('frontend.partials.listVines')
        <div class="row">
            <div class="col col-md-12">
                {{$pag_links->appends($_GET)->links()}}
            </div>
        </div>
    </div>
</div>
@endsection
