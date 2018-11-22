@if(count($vines_for_review))
@foreach($vines_for_review->chunk(3) as $vine_chunk)
    <div class="row">
        @foreach($vine_chunk as $key => $vine)
        <div class="col-xs-12 col-md-4 col-sm-12 col-lg-4">
            <div class="card my-2 {{$key % 3 ==  0 ?  '' : 'mx-2' }}">
                <div class="text-right volume">
                    <i class="fas fa-wine-bottle"></i>{{$vine->volume / 1000}} л
                </div>
                <div class="img-holder">
                    @if($vine->image_src!=null)
                        <img src="{{Storage::url($vine->image_src)}}" class="wine_img">
                        @else
                        <img src="{{Storage::url('projectFolders/unknow.png')}}" class="wine_img">
                        @endif
                </div>
                <div class="description">
                    <p>
                        <span class="name_rus">
                            {{$vine->name_rus}}
                            {{$vine->name_en ? ','.$vine->name_en : ''}}
                            {{','.$vine->year}} г
                        </span>
                    </p>
                </div>
                <div class="info-wine">
                    <div class="text-center">
                        <span class="country_wine">
                            {{$vine->country}}
                            {{$vine->country_en ? ','.$vine->country_en : ''}}
                        </span>
                    </div>
                    <div class="region_name">
                        {{$vine->region_name}}
                    </div>
                    <div class="text-center">
                        <span class="color_wine">{{$vine->color}}</span>
                        <span class="sweet_wine">{{$vine->sweet}}</span>
                    </div>
                </div>
                <div class="price">
                    Цена за бутылку
                    <span class="price_bottle">
                        {{$vine->price}} <i class="fas fa-ruble-sign"></i>
                    </span>
                </div>

                <div class="price">
                    Цена за бокал :
                    <span class="price_cup">
                        {{$vine->price_cup}} <i class="fas fa-ruble-sign"></i>
                    </span>
                </div>
                <input type="hidden" class="strength" value="{{$vine->strength}}" />
                <input type="hidden" class="year" value="{{$vine->year}}" />
                <input type="hidden" class="sort_contain" value="{{$vine->sort_contain}}">
                <input type="hidden" class="producer" value="{{$vine->producer}}">
                <div class="view_button">
                    <button class="btn btn-warning wine">
                        <i class="fas fa-search-plus"></i>Посмотреть
                    </button>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    @endforeach
    <div class="row">
        <div class="col-md12">
            {{$vines->appends([$_GET])->links()}}
        </div>

    </div>

    @else
    <div>Вина отсутсвуют по заданным критериям</div>
    @endif
