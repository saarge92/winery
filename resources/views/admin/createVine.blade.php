@extends('layouts.admin_panel')
@section('title')
Добавление вина
@endsection
@section('content')

<div class="container">
    <form action="{{route('postVine')}}" enctype="multipart/form-data" method="POST">
        <div class="form-group">
            <div class="form-row">
                <div class="col-md-6">
                    <label>Страна</label>
                    <div class="form-label-group">
                        <select class="form-control" name="country">
                            @foreach ($countries as $country)
                            <option value="{{$country->id}}">
                                {{$country->name_rus}}
                            </option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="col-md-6">
                    <label>Название* (по русски)</label>
                    <input type="text" class="form-control" name="name_rus" placeholder="Вина Кубани" minlength="2" required="required" value="{{old('name_rus')}}">
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
                            <option value="{{$producer->id}}">
                                {{$producer->name}}
                            </option>
                            @endforeach
                            <option value="" selected>Не указан</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <label>Название (по английский - необязательно)</label>
                    <input type="text" class="form-control" name="name_en" placeholder="vine of Cuban" value="{{old('name_en')}}">
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
                            <option value="{{$color->id}}">
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
                        <option value="{{$sweet->id}}">
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
                    <label>Объем (в мл)</label>
                    <input type="number" class="int form-control" name="volume" required="required" value="{{old('volume') ? old('volume') : 750}}">
                </div>
                <div class="col-md-6">
                    <label>Крепость %</label>
                    <input type="text" name="strength" class="decimal form-control" value="{{old('strength')}}" required="required">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-row">
                <div class="col-md-6">
                    <label>Цена (За бутылку)<i class="fas fa-wine-bottle"></i></label>
                    <input type="number" class="decimal form-control" name="price_bottle" required="required" value="{{old('price_bottle')}}">
                </div>
                <div class="col-md-6">
                    <label>Цена (за бокал)<i class="fas fa-wine-glass"></i></label>
                    <input type="text" name="price_glass" class="decimal form-control" value="{{old('price_glass')}}">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-row">
                <div class="col-md-6">
                    <label>Год</label>
                    <input type="number" class="int form-control" name="year" maxlength="11" value="{{old('year')}}">
                </div>
                <div class="col-md-6">
                    <label>Изображение</label> <br>
                    <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-row">
                <div class="col-md-6">
                    <label>Тип вина</label>
                    <select class="form-control" name="type_wine">
                        @foreach($types_for_wines as $type_w)
                        <option value="{{$type_w->id}}">{{$type_w->name}}</option>
                        @endforeach
                        <option value="" selected>Общий</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label>Регион</label>
                    <input type="text" name="region_name" class="form-control" value="{{old('region_name')}}">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-row">
                <div class="col-md-6">
                    <label>Содержание вина (необязательно)</label>
                    <textarea class="form-control" name="sort_contain" placeholder="Например Шардоне 80%"></textarea>
                </div>
                <div class="col-md-6">
                    <label>Coravin</label>
                    <input type="checkbox" name="coravin">
                </div>
            </div>
        </div>
        {{csrf_field()}}
        <button type="submit" class="text-white btn btn-danger btn-block">
            <i class="fas fa-plus"></i> Добавить
        </button>
    </form>
</div>
@endsection

@section('scripts')
<script type="text/javascript" src="{{URL::asset('admin/js/int_input.js')}}"></script>
@endsection
