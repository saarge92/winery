@extends('layouts.layout')

@section('styles')
<link rel="stylesheet" type="text/css" href={{URL::asset('css/oneWine.css')}}>
@endsection

@section('content')
@if($vine!=null)
<div class="container mt-5">
	<div class="row">
		<div class="col-lg-4 col-md-4 col-sm-6">
			<div class="image-holder">
				<img src="{{Storage::url($vine->image_src)}}">
			</div>
		</div>
		<div class="col-lg-8 col-md-8 col-sm-6">
			<div class="row">
				<div class="col-md-12">
					<div class="price-block">
						Цена за бутылку: {{$vine->price}} руб,
					</div>
					<div class="price-block">
						Цена за бокал: {{$vine->price_cup}} руб
					</div>
				</div>
			</div>
			<div class="row country_info">
				<div class="mr-auto">Название</div>
				<div>{{$vine->name_rus}} {{$vine->name_en ? ','.$vine->name_en : ''}}</div>
			</div>
			<div class="row info-text">
				<div class="mr-auto">Страна</div>
				<div>{{$vine->country}}</div>
			</div>
			<div class="row country_info">
				<div class="mr-auto">Цвет</div>
				<div>{{$vine->color}}</div>
			</div>
			<div class="row info-text">
				<div class="mr-auto">Производитель</div>
				<div>{{$vine->producer}}</div>
			</div>
			<div class="row country_info">
				<div class="mr-auto">Сахар</div>
				<div>{{$vine->sweet}}</div>
			</div>
			<div class="row info-text">
				<div class="mr-auto">Объем</div>
				<div>{{$vine->volume}} л</div>
			</div>
			<div class="row country_info">
				<div class="mr-auto">Год</div>
				<div>{{$vine->year}}</div>
			</div>
			<div class="row info-text">
				<div class="mr-auto">Крепость</div>
				<div>{{$vine->strength}} %</div>
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
