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
                <input type="number" class="priceSlider form-control filter_checked" class="priceSlider" id="price_min" name="price_min" type="number" value="{{isset($_GET['price_min']) ? $_GET['price_min'] : 0}}">
                Макс.Цена
                <input type="number" class="priceSlider form-control filter_checked" id="price_max" name="price_max" type="number" value="{{isset($_GET['price_max']) ? $_GET['price_max'] : $max_price}}">
                <div id="slider_price"></div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="param-holder" id="toggle_country">
                        @if(isset($_GET['country_visible']))
                        @if($_GET['country_visible']== 1)
                        <i class="fas fa-minus" id="country_icon"></i>
                        @elseif ($_GET['country_visible']== 0)
                        <i class="fas fa-plus" id="country_icon"></i>
                        @endif
                        @else
                        <i class="fas fa-plus" id="country_icon"></i>
                        @endif
                        Страны
                    </div>
                </div>
            </div>

            <div style="display: {{isset($_GET['country_visible']) ? ($_GET['country_visible'] == '1' ? 'block' : 'none') : 'none'}}" id="country_block">
                @foreach ($countries as $country)
                <input type="checkbox" name="country[]" class="filter_checked" value="{{$country->id}}" {{in_array($country->id, isset($_GET['country']) ? $_GET['country'] : []) ? 'checked' : ''}}>
                <label for="{{$country->id}}">{{$country->name_rus}} {{$country->name_en ? '/'.$country->name_en : ''}}</label> <br>
                @endforeach
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="param-holder" id="toggle_color">
                        @if(isset($_GET['color_visible']))
                        @if($_GET['color_visible']== 1)
                        <i class="fas fa-minus" id="color_icon"></i>
                        @elseif ($_GET['color_visible']== 0)
                        <i class="fas fa-plus" id="color_icon"></i>
                        @endif
                        @else
                        <i class="fas fa-plus" id="color_icon"></i>
                        @endif
                        Цвет
                    </div>
                </div>
            </div>

            <div style="display: {{isset($_GET['color_visible']) ? ($_GET['color_visible'] == '1' ? 'block' : 'none') : 'none'}}" id="color_block">
                @foreach ($colors as $color)
                <input type="checkbox" name="color[]" value="{{$color->id}}" class="filter_checked" {{in_array($color->id,isset($_GET['color']) ? $_GET['color'] : []) ? 'checked' : ''}}>
                <label for="{{$color->id}}">{{$color->name}}</label> <br>
                @endforeach
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="param-holder" id="toggle_sweet">
                        @if(isset($_GET['sweet_visible']))
                        @if($_GET['sweet_visible']== 1)
                        <i class="fas fa-minus" id="sweet_icon"></i>
                        @elseif ($_GET['sweet_visible']== 0)
                        <i class="fas fa-plus" id="sweet_icon"></i>
                        @endif
                        @else
                        <i class="fas fa-plus" id="sweet_icon"></i>
                        @endif
                        Сахар
                    </div>
                </div>
            </div>

            <div style="display: {{isset($_GET['sweet_visible']) ? ($_GET['sweet_visible'] == '1' ? 'block' : 'none') : 'none'}}" id="sweet_block">
                @foreach ($sweets as $sweet)
                <input type="checkbox" name="sweet[]" class="filter_checked" value="{{$sweet->id}}" {{in_array($sweet->id,isset($_GET['sweet'])?$_GET['sweet'] : []) ? 'checked' : ''}}>
                <label for="{{$sweet->id}}">{{$sweet->name}}</label> <br>
                @endforeach
            </div>
            <div>
                @foreach ($type_of_wines as $type_w)
                <div>
                    <a href="{{route('admin')}}?type_of_wine={{$type_w->id}}#vines" class="especial_wines
                        {{ isset($_GET['type_of_wine']) ? ($_GET['type_of_wine'] == $type_w->id ? 'red_item' : '') : ''}}">
                        {{$type_w->name}}
                    </a>
                </div>
                @endforeach
            </div>
            <div style="text-align:center;padding:0.5rem;">
                <button class="btn btn-danger" type="submit">
                    Применить
                </button>
            </div>
        </div>
        <input type="hidden" name="country_visible" id="country_visible" value="{{isset($_GET['country_visible']) ? $_GET['country_visible'] : 0}}">
        <input type="hidden" name="color_visible" id="color_visible" value="{{isset($_GET['color_visible']) ? $_GET['color_visible'] : 0}}">
        <input type="hidden" name="sweet_visible" id="sweet_visible" value="{{isset($_GET['sweet_visible']) ? $_GET['sweet_visible'] : 0}}">
        <input type="hidden" name="year_visible" id="year_visible" value="{{isset($_GET['year_visible']) ? $_GET['year_visible'] : 0}}">
    </form>
</div>
