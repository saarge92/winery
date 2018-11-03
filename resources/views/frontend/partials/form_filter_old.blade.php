<form action="{{route('home')}}#vines" method="GET" id="filter_form">
    <div class="header-filter">
        <h4 class="pull-left">Фильтры</h4>
        <a class="btn btn-default pull-right" href="{{route('home')}}#vines">Очистить</a>
    </div>
    <div class="clearfix"></div>
    <div class="filter-content">
        <p>Цена</p>
        <v-range-slider
          max="{{isset($params['price_max']) ? $params['price_max'] : $max_price}}"
          :min="20"
          :step="10"
        ></v-range-slider>
        <input type="text" name="price_min" class="form-control filter_checked"
            value="{{isset($params['price_min']) ? $params['price_min'] : $min_price}}">
        <input type="text" name="price_max" class="form-control filter_checked"
            value="{{isset($params['price_max']) ? $params['price_max'] : $max_price}}">
    </div>
    <div class="">
        @foreach ($countries as $country)
        <input type="checkbox" name="country[]" class="filter_checked"
        value="{{$country->id}}" {{in_array($country->id, isset($params['country']) ? $params['country'] : []) ? 'checked' : ''}}>
        <label for="{{$country->id}}">{{$country->name_rus}} {{$country->name_en ? '/'.$country->name_en : ''}}</label> <br>
        @endforeach
    </div>
    <br>

    <div>
        @foreach ($colors as $color)
        <input type="checkbox" name="color[]" value="{{$color->id}}" class="filter_checked"
            {{in_array($color->id,isset($params['color']) ? $params['color'] : []) ? 'checked' : ''}}>
        <label for="{{$color->id}}">{{$color->name}}</label> <br>
        @endforeach
    </div>
    <br>
    <div class="">
        @foreach ($sweets as $sweet)
        <input type="checkbox" name="sweet[]" class="filter_checked"
        value="{{$sweet->id}}" {{in_array($sweet->id,isset($params['sweet'])?$params['sweet'] : []) ? 'checked' : ''}}>
        <label for="{{$sweet->id}}">{{$sweet->name}}</label> <br>
        @endforeach
    </div>
    <div class="">
        <label>Объем</label>
        <input type="text" name="volume_min" class="filter_checked"
            value={{isset($params['volume_min']) ? $params['volume_min'] : $volume_min}}>
        <input type="text" name="volume_max" class="filter_checked"
            value={{isset($params['volume_max']) ? $params['volume_max'] : $volume_max}}>
    </div>
    <div class="">
        <label>Год</label><br>
        @foreach ($year_distincts as $yd)
            <input type="checkbox" name="years[]" value="{{$yd->year}}" class="filter_checked"
            {{in_array($yd->year,isset($params['years']) ? $params['years'] : []) ? 'checked' : ''}}>
            <label>{{$yd->year}}</label> <br>
        @endforeach
    </div>
    <button type="submit" name="button" class="btn btn-danger">Применить</button>
</form>
<script type="text/javascript">
    var token = '{{csrf_token()}}';
</script>
