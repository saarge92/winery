@extends('layouts.layout')

@section('styles')
	<link rel="stylesheet" type="text/css" href={{URL::asset('css/oneWine.css')}}>
@endsection

@section('content')
@if($vine!=null)
    <v-container>
        <v-layout row wrap>
        	<v-flex md4>
        		<div class="image-holder">
					<img src="{{Storage::url($vine->image_src)}}">
        		</div>
        	</v-flex>
        	<v-flex md8>
        		<v-layout row wrap>
        			<v-flex>
        				<div class="price-block">
        				Цена: <i class="fas fa-wine-bottle" style="color:#f1591e;"></i> {{$vine->price}} руб,
        					<i class="fas fa-wine-glass"></i> {{$vine->price_cup}} руб
        				</div>
        			</v-flex>
        		</v-layout>
        		<v-layout row wrap class="country_info">
        			<v-flex md6>Название</v-flex>
        			<v-flex md6>{{$vine->name_rus}} {{$vine->name_en ? ','.$vine->name_en : ''}}</v-flex>
        		</v-layout>
        		<v-layout row wrap class="info-text">
        			<v-flex md6>Страна</v-flex>
        			<v-flex md6>{{$vine->country}}</v-flex>
        		</v-layout>
        		 <v-layout row wrap class="country_info">
        			<v-flex md6>Цвет</v-flex>
        			<v-flex md6>{{$vine->color}}</v-flex>
        		</v-layout>
        		<v-layout row wrap class="info-text">
        			<v-flex md6>Производитель</v-flex>
        			<v-flex md6>{{$vine->producer}}</v-flex>
        		</v-layout>
        		 <v-layout row wrap class="country_info">
        			<v-flex md6>Сахар</v-flex>
        			<v-flex md6>{{$vine->sweet}}</v-flex>
        		</v-layout>
        		<v-layout row wrap class="info-text">
        			<v-flex md6>Объем</v-flex>
        			<v-flex md6>{{$vine->volume}} л</v-flex>
        		</v-layout>
        		<v-layout row wrap class="country_info">
        			<v-flex md6>Год</v-flex>
        			<v-flex md6>{{$vine->year}}</v-flex>
        		</v-layout>
        		<v-layout row wrap class="info-text">
        			<v-flex md6>Крепость</v-flex>
        			<v-flex md6>{{$vine->strength}} л</v-flex>
        		</v-layout>
        		<v-layout row wrap class="info-text">
        			<v-flex md6 offset-md4 xs7 offset-xs2>
        				<v-btn color="indigo darken-4" class="white--text" href="{{URL::previous()}}">
        					<i class="fas fa-backward"></i> К списку Вин
        				</v-btn>
        			</v-flex>
        		</v-layout>
        	</v-flex>
        </v-layout>
    </v-container>
@endif
@endsection
