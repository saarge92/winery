@if(count($vines_for_review))
@foreach($vines_for_review->chunk(3) as $vine_chunk)
    <div class="row" id="vines">
        @foreach($vine_chunk as $key => $vine)
        <div class="col-xs-12 col-md-4 col-sm-12 col-lg-4">
            <div class="card my-2 {{$key % 3 ==  0 ?  '' : 'mx-2' }}">
                <div class="text-right">
                    <i class="fas fa-wine-bottle"></i>{{$vine->volume / 1000}} л
                </div>
                <div class="img-holder">
                    @if($vine->image_src!=null)
                        <img src="{{Storage::url($vine->image_src)}}" class="">
                        @else
                        <img src="{{Storage::url('projectFolders/unknow.png')}}" class="">
                        @endif
                </div>
                <div class="description">
                    <p>
                        {{$vine->name_rus}}
                        {{$vine->name_en ? ','.$vine->name_en : ''}},
                        {{$vine->volume / 1000}} л
                    </p>
                </div>
                <div class="info-wine">
                    <div class="row">
                        <div class="float-left">
                            {{$vine->color}},
                            {{$vine->sweet}}
                        </div>
                        <div class="mx-auto">
                            {{$vine->country}}
                        </div>
                        <div class="text-right">
                            {{$vine->year}} г
                        </div>
                    </div>
                </div>
                <div class="price">
                    Цена за бутылку {{$vine->price}} <i class="fas fa-ruble-sign"></i>
                </div>

                <div class="price">
                    Цена за бокал : {{$vine->price_cup}} <i class="fas fa-ruble-sign"></i>
                </div>
                <div class="view_button">
                    <a href="{{route('viewWine',['id'=>$vine->id])}}" target="_blank" class="btn btn-warning">
                        <i class="fas fa-search-plus"></i>Посмотреть
                    </a>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    @endforeach
    <div class="row">
        <div class="col-md12">
            {{$vines->appends($_GET)->links()}}
        </div>

    </div>

    @else
    <p>Вина отсутсвуют по заданным критериям</p>
    @endif
