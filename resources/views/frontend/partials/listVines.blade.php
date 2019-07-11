@if(count($vines_for_review)) @foreach($vines_for_review->chunk(3) as $vine_chunk)
<div class="row">
    @foreach($vine_chunk as $key => $vine)
    <div class="col-xs-12 col-md-4 col-sm-12 col-lg-4">
        <div class="card my-2">
            <div class="card-vine-header">
                @if($vine->is_coravin == 1)
                <img class="coravin" src="{{asset('icons/Coravin.png')}}" alt=""> @endif
                <span class="volume_info"><i class="fas fa-wine-bottle"></i>{{$vine->volume / 1000}} л </span>
            </div>
            <div class="img-holder">
                @if($vine->image_src!=null)
                <img src="{{Storage::url($vine->image_src)}}" class="wine_img"> @else
                <img src="{{Storage::url('projectFolders/unknow.png')}}" class="wine_img"> @endif
            </div>
            <div class="description">
                <div class="name_rus">
                    {{$vine->name_rus}}
                </div>
                @if($vine->name_en != null)
                <div class="name_rus">
                    {{$vine->name_en}}
                </div>
                @endif @if($vine->year)
                <span>
                    {{$vine->year.'г'}}
                </span> @endif
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
                @if($vine->price_cup != null) Цена за бокал :
                <span class="price_cup">
                    {{$vine->price_cup}} <i class="fas fa-ruble-sign"></i>
                </span> @endif
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
<div class="row mt-2 mb-2">
    <div class="col-md12">
        Показывать по
        <span>
            @foreach ($paginators as $paginator)
            <a href="{{route(request()->route()->getName(),array_merge(request()->except(['perPage']),['perPage'=>$paginator->num]))}}#vines"
                class="btn {{$paginate_number == $paginator->num ? 'btn-danger' : 'btn-dark'}}">{{$paginator->num == 0 ? 'Все' : $paginator->num}}</a>
            @endforeach
        </span>
    </div>
</div>

@if($paginate_number!=0)
<div class="row">
    <div class="col-md12">
        {{$vines->fragment('vines')->appends(request()->input())->links()}}
    </div>
</div>
@endif @else
<div>Вина отсутсвуют по заданным критериям</div>
<div><a href="{{route('home')}}#vines" class="btn btn-primary"><i class="fas fa-arrow-left"></i>К списку вин</a></div>
@endif