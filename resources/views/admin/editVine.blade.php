@extends('layouts.admin_panel')

@section('content')

<div class="container">
    @if($vine!=null)
    <div class="row">
        <div class="col col-md-6">
            <img src="{{Storage::url($vine->image_src)}}" style="height:10rem;" />
            @include('admin.partials.activate_disable_vine')
        </div>
    </div>
    <form action="{{route('postEditVine')}}" enctype="multipart/form-data" method="POST">
        <div class="form-group">
            <div class="form-row">
                <div class="col-md-6">
                    <label>Страна</label>
                    <div class="form-label-group">
                        <select class="form-control" name="country">
                            @foreach ($countries as $country)
                            <option value="{{$country->id}}" {{$vine->country_id==$country->id ? 'selected' : ''}}>
                                {{$country->name_rus}}
                            </option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="col-md-6">
                    <label>Название* (по русски)</label>
                    <input type="text" class="form-control" name="name_rus" placeholder="Вина Кубани" minlength="2" required="required" value="{{$vine->name_rus}}">
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="form-row">
                <div class="col-md-6">
                    <label>Производитель</label>
                    <div class="form-label-group">
                        <select class="form-control" name="producer">
                            @foreach ($producers as $producer)
                            <option value="{{$producer->id}}" {{$vine->producer_id == $producer->id ? 'selected' : ''}}>
                                {{$producer->name}}
                            </option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <label>Название (по английский - необязательно)</label>
                    <input type="text" class="form-control" name="name_en" placeholder="vine of Cuban" value="{{$vine->name_en}}">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-row">
                <div class="col-md-6">
                    <label>Цвет</label>
                    <div class="form-label-group">
                        <select class="form-control" name="color">
                            @foreach ($colors as $color)
                            <option value="{{$color->id}}" {{$vine->color_id == $color->id ? 'selected' : ''}}>
                                {{$color->name}}
                            </option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <label>Сладость</label>
                    <select class="form-control" name="sweet">
                        @foreach ($sweets as $sweet)
                        <option value="{{$sweet->id}}" {{$vine->sweet_id == $sweet->id}}>
                            {{$sweet->name}}
                        </option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-row">
                <div class="col-md-6">
                    <label>Объем (в литрах)</label>
                    <input type="number" class="form-control" name="volume" required="required" value="{{$vine->volume}}">
                </div>
                <div class="col-md-6">
                    <label>Крепость %</label>
                    <input type="number" name="strength" class="form-control" value="{{$vine->strength}}" required="required">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-row">
                <div class="col-md-6">
                    <label>Цена (За бутылку)<i class="fas fa-wine-bottle"></i></label>
                    <input type="number" class="form-control" name="price_bottle" required="required" value="{{$vine->price}}">
                </div>
                <div class="col-md-6">
                    <label>Цена (за бокал)<i class="fas fa-wine-glass"></i></label>
                    <input type="text" name="price_glass" class="form-control" required="required" value="{{$vine->price_cup}}">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-row">
                <div class="col-md-6">
                    <label>Год</label>
                    <input type="number" class="form-control" name="year" required="required" value="{{$vine->year}}">
                </div>
                <div class="col-md-6">
                    <label>Изображение</label>
                    <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg">
                </div>
            </div>
        </div>
        <div class="form-group">
            <label>Содержание вина (необязательно)</label>
            <textarea class="form-control" name="sort_contain" placeholder="Например Шардоне 80%" value="{{$vine->sort_contain}}">
				</textarea>
        </div>
        <input type="hidden" name="id" value="{{$vine->id}}">
        {{csrf_field()}}
        <button type="submit" class="text-white btn btn-success btn-block">
            <i class="fas fa-edit"></i> Редактировать
        </button>
    </form>
    @else
    <div class="row">
        <div class="col col-md-12">
            <p>К сожалению, товар отсутствует в базе</p>
        </div>
    </div>
    @endif
</div>

@endsection
