@extends('layouts.layout')
@section('title')
Винная карта BarHouse
@endsection

{{-- @include('frontend.partials.loader') --}}
@section('content')
    @include('frontend.partials.slider')
    @include('frontend.partials.countOfFilter')
<div id="vines">
    <v-container>
        @include('frontend.partials.searchWines')
        <v-layout row wrap>
            <v-flex md2>
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
@endsection