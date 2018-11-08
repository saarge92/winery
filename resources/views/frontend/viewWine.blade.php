@extends('layouts.layout')

@section('styles')
	<link rel="stylesheet" type="text/css" href={{URL::asset('css/oneWine.css')}}>
@endsection

@section('content')
@if($vine!=null)
    <div class="container">
        <div class="row">
        	<div class="col-lg-4 col-md-4 col-sm-6">
        		<div class="image-holder">
					<img src="{{Storage::url($vine->image_src)}}">
        		</div>
        	</div>
        	<div class="col-lg-8 col-md-8 col-sm-6">
        		<div class="row">
        			<div>
        				<div class="price-block">
	        				Цена:
							<i class="fas fa-wine-bottle" style="color:#f1591e;"></i> {{$vine->price}} руб,
	        				<i class="fas fa-wine-glass"></i> {{$vine->price_cup}} руб
        				</div>
        			</div>
        		</div>
        		<div class="row country_info">
        			<div clas="col-md-6 col-sm-6">Название</div>
        			<div class="col-md-6 col-sm-6">{{$vine->name_rus}} {{$vine->name_en ? ','.$vine->name_en : ''}}</div>
        		</div>
        		<div class="row info-text">
        			<div class="col-md-6">Страна</div>
        			<div class="col-md-6">{{$vine->country}}</div>
        		</div>
        		 <div class="row country_info">
        			<div class="col-md-6">Цвет</div>
        			<div class="col-md-6">{{$vine->color}}</div>
        		</div>
        		<div class="row info-text">
        			<div class="col-md-6">Производитель</div>
        			<div class="col-md-6">{{$vine->producer}}</div>
        		</div>
        		 <div class="row country_info">
        			<div class="col-md-6">Сахар</div>
        			<div class="col-md-6">{{$vine->sweet}}</div>
        		</div>
        		<div class="row info-text">
        			<div class="col-md-6">Объем</div>
        			<div class="col-md-6">{{$vine->volume}} л</div>
        		</div>
        		<div class="row country_info">
        			<div class="col-md-6">Год</div>
        			<div class="col-md-6">{{$vine->year}}</div>
        		</div>
        		<div class="row info-text">
        			<div class="col-md-6">Крепость</div>
        			<div class="col-md-6">{{$vine->strength}} л</div>
        		</div>
        		<div class="row info-text">
        			<div class="col-md6 offset-md-4 col-xs-7 offset-xs2">
        				<a class="btn btn-primary" href="{{URL::previous()}}">
        					<i class="fas fa-backward"></i> К списку Вин
        				</a>
        			</div>
        		</div>
        	</div>
        </div>
    </div>
@endif
@endsection
