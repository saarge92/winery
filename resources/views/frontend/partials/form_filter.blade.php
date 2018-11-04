<div class="filter-block">
    <form action="{{route('home')}}#vines" id="filter_form" method="GET">
        <div class="filter-groups">
            <v-layout column>
                <v-flex md12="">
                    <h4 style="text-align: center;">
                        Фильтры
                        <v-btn href="{{route('home')}}">Очистить</v-btn>
                    </h4>
                </v-flex>
            </v-layout>
            <v-layout column>
                <v-flex md12="">
                    <div @click="priceNav=!priceNav" class="param-holder">
                        <i class="fas fa-plus" v-show="priceNav==false">
                        </i>
                        <i class="fas fa-minus" v-show="priceNav==true">
                        </i>
                        Цены
                    </div>
                </v-flex>
            </v-layout>
            <div v-show="priceNav==true">
                Мин.цена
                  <input type="number" class="priceSlider input filter_checked" class="priceSlider" id="price_min" name="price_min" single-line="" type="number" value="{{isset($params['price_min']) ? $params['price_min'] : $min_price}}">
                Макс.Цена
                <input type="number" class="priceSlider input filter_checked" id="price_max" name="price_max" single-line=""type="number" value="{{isset($params['price_max']) ? $params['price_max'] : $max_price}}">
                <div id="slider_price" class="slider_elements"></div>
            </div>
            <v-layout row="" wrap="">
                <v-flex md12="">
                    <div @click="volumeNav=!volumeNav" class="param-holder">
                        <i class="fas fa-plus" v-show="volumeNav==false">
                        </i>
                        <i class="fas fa-minus" v-show="volumeNav==true">
                        </i>
                        Объем
                    </div>
                </v-flex>
            </v-layout>
            <div v-show="volumeNav==true">
                Мин.объем
                <input type="number" class="input filter_checked"  id="volume_min" name="volume_min" value="{{isset($params['volume_min']) ? $params['volume_min'] : $volume_min}}">
                Макс.объем
                <input type="number" class="input filter_checked" id="volume_max" name="volume_max" value="{{isset($params['volume_max']) ? $params['volume_max'] : $volume_max}}">
                 <div id="volume_slider" class="slider_elements"></div>
            </div>

            <v-layout row="" wrap="">
                <v-flex md12="">
                    <div @click="countryNav=!countryNav" class="param-holder">
                        <i class="fas fa-plus" v-show="countryNav==false">
                        </i>
                        <i class="fas fa-minus" v-show="countryNav==true">
                        </i>
                        Страны
                    </div>
                </v-flex>
            </v-layout>

            <div v-show="countryNav==true">
            @foreach ($countries as $country)
                <input  type="checkbox" name="country[]" class="filter_checked"
                value="{{$country->id}}" {{in_array($country->id, isset($params['country']) ? $params['country'] : []) ? 'checked' : ''}}>
                <label for="{{$country->id}}">{{$country->name_rus}} {{$country->name_en ? '/'.$country->name_en : ''}}</label> <br>
            @endforeach
            </div>

            <v-layout row="" wrap="">
                <v-flex md12="">
                    <div @click="colorNav=!colorNav" class="param-holder">
                        <i class="fas fa-plus" v-show="colorNav==false"></i>
                        <i class="fas fa-minus" v-show="colorNav==true"></i>
                        Цвет
                    </div>
                </v-flex>
            </v-layout>

            <div v-show="colorNav==true">
                @foreach ($colors as $color)
                    <input type="checkbox" name="color[]" value="{{$color->id}}" class="filter_checked"
                    {{in_array($color->id,isset($params['color']) ? $params['color'] : []) ? 'checked' : ''}}>
                    <label for="{{$color->id}}">{{$color->name}}</label> <br>
                @endforeach
            </div>

            <v-layout row="" wrap="">
                <v-flex md12="">
                    <div @click="sweetNav=!sweetNav" class="param-holder">
                        <i class="fas fa-plus" v-show="sweetNav==false"></i>
                        <i class="fas fa-minus" v-show="sweetNav==true"></i>
                        Сладость
                    </div>
                </v-flex>
            </v-layout>

            <div v-show="sweetNav==true">
                @foreach ($sweets as $sweet)
                    <input type="checkbox" name="sweet[]" class="filter_checked"
                    value="{{$sweet->id}}" {{in_array($sweet->id,isset($params['sweet'])?$params['sweet'] : []) ? 'checked' : ''}}>
                    <label for="{{$sweet->id}}">{{$sweet->name}}</label> <br>
                @endforeach
            </div>
            <v-layout row="" wrap="">
                <v-flex md12="">
                    <div @click="yearNav=!yearNav" class="param-holder">
                        <i class="fas fa-plus" v-show="yearNav==false"></i>
                        <i class="fas fa-minus" v-show="yearNav==true"></i>
                        Год
                    </div>
                </v-flex>
            </v-layout>
            <div v-show="yearNav==true">
                @foreach ($year_distincts as $yd)
                    <input type="checkbox" name="years[]" value="{{$yd->year}}" class="filter_checked"
                    {{in_array($yd->year,isset($params['years']) ? $params['years'] : []) ? 'checked' : ''}}>
                    <label>{{$yd->year}}</label> <br>
                @endforeach
            </div>
            <div style="text-align:center;">
                <v-btn class="white--text" color="red darken-4" type="submit">
                    Применить
                </v-btn>
            </div>
        </div>
    </form>
</div>
