<div class="filter-block">
    <form action="{{route('admin')}}" id="filter_form" method="GET">
        <div class="filter-groups">
            <div class="row">
                <div class="col-md-12">
                    <h4 style="text-align: center;">
                        Фильтры
                        <a class="btn btn-light" href="{{route('admin')}}">Очистить</a>
                    </h4>
                </div>
            </div>
            <div>
                Мин.цена
                <input type="number" class="priceSlider form-control filter_checked" class="priceSlider" id="price_min" name="price_min" type="number" value="{{isset($params['price_min']) ? $params['price_min'] : 0}}">
                Макс.Цена
                <input type="number" class="priceSlider form-control filter_checked" id="price_max" name="price_max" type="number" value="{{isset($params['price_max']) ? $params['price_max'] : $max_price}}">
                <div id="slider_price"></div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="param-holder" id="toggle_country">
                        @if(isset($params['country_visible']))
                        @if($params['country_visible']== 1)
                        <i class="fas fa-minus" id="country_icon"></i>
                        @elseif ($params['country_visible']== 0)
                        <i class="fas fa-plus" id="country_icon"></i>
                        @endif
                        @else
                        <i class="fas fa-plus" id="country_icon"></i>
                        @endif
                        Страны
                    </div>
                </div>
            </div>

            <div style="display: {{isset($params['country_visible']) ? ($params['country_visible'] == '1' ? 'block' : 'none') : 'none'}}" id="country_block">
                @foreach ($countries as $country)
                <input type="checkbox" name="country[]" class="filter_checked" value="{{$country->id}}" {{in_array($country->id, isset($params['country']) ? $params['country'] : []) ? 'checked' : ''}}>
                <label for="{{$country->id}}">{{$country->name_rus}} {{$country->name_en ? '/'.$country->name_en : ''}}</label> <br>
                @endforeach
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="param-holder" id="toggle_color">
                        @if(isset($params['color_visible']))
                        @if($params['color_visible']== 1)
                        <i class="fas fa-minus" id="color_icon"></i>
                        @elseif ($params['color_visible']== 0)
                        <i class="fas fa-plus" id="color_icon"></i>
                        @endif
                        @else
                        <i class="fas fa-plus" id="color_icon"></i>
                        @endif
                        Цвет
                    </div>
                </div>
            </div>

            <div style="display: {{isset($params['color_visible']) ? ($params['color_visible'] == '1' ? 'block' : 'none') : 'none'}}" id="color_block">
                @foreach ($colors as $color)
                <input type="checkbox" name="color[]" value="{{$color->id}}" class="filter_checked" {{in_array($color->id,isset($params['color']) ? $params['color'] : []) ? 'checked' : ''}}>
                <label for="{{$color->id}}">{{$color->name}}</label> <br>
                @endforeach
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="param-holder" id="toggle_sweet">
                        @if(isset($params['sweet_visible']))
                        @if($params['sweet_visible']== 1)
                        <i class="fas fa-minus" id="sweet_icon"></i>
                        @elseif ($params['sweet_visible']== 0)
                        <i class="fas fa-plus" id="sweet_icon"></i>
                        @endif
                        @else
                        <i class="fas fa-plus" id="sweet_icon"></i>
                        @endif
                        Сахар
                    </div>
                </div>
            </div>

            <div style="display: {{isset($params['sweet_visible']) ? ($params['sweet_visible'] == '1' ? 'block' : 'none') : 'none'}}" id="sweet_block">
                @foreach ($sweets as $sweet)
                <input type="checkbox" name="sweet[]" class="filter_checked" value="{{$sweet->id}}" {{in_array($sweet->id,isset($params['sweet'])?$params['sweet'] : []) ? 'checked' : ''}}>
                <label for="{{$sweet->id}}">{{$sweet->name}}</label> <br>
                @endforeach
            </div>
            <div>
                @foreach ($type_of_wines as $type_w)
                <div>
                    <a href="{{route('home')}}?type_of_wine={{$type_w->id}}#vines" class="especial_wines">{{$type_w->name}}</a>
                </div>
                @endforeach
            </div>
            <div style="text-align:center;padding:0.5rem;">
                <button class="btn btn-danger" type="submit">
                    Применить
                </button>
            </div>
        </div>
        <input type="hidden" name="country_visible" id="country_visible" value="{{isset($params['country_visible']) ? $params['country_visible'] : 0}}">
        <input type="hidden" name="color_visible" id="color_visible" value="{{isset($params['color_visible']) ? $params['color_visible'] : 0}}">
        <input type="hidden" name="sweet_visible" id="sweet_visible" value="{{isset($params['sweet_visible']) ? $params['sweet_visible'] : 0}}">
        <input type="hidden" name="year_visible" id="year_visible" value="{{isset($params['year_visible']) ? $params['year_visible'] : 0}}">
    </form>
</div>
