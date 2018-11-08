@if(count($vines_for_review))
@foreach($vines_for_review->chunk(3) as $vine_chunk)
    <div class="row" id="vines">
        @foreach($vine_chunk as $key => $vine)
        <div class="col-xs-12 col-md-4 col-sm-12 col-lg-4">
            <div class="card my-2 {{$key % 3 ==  0 ?  '' : 'mx-2' }}">
                <div class="text-md-right text-xs-right text-sm-right">
                    <i class="fas fa-wine-bottle"></i>{{$vine->volume / 1000}} л
                </div>
                <div class="img-holder">
                    @if($vine->image_src!=null)
                        <img src="{{Storage::url($vine->image_src)}}" class="">
                        @else
                        <img src="{{Storage::url('projectFolders/unknow.png')}}">
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
                        <div class="col-md-4">
                            {{$vine->color}},
                            {{$vine->sweet}}
                        </div>
                        <div class="col-md-4">
                            {{$vine->country}}
                        </div>
                        <div class="col-md-4">
                            {{$vine->year}} г
                        </div>
                    </div>
                </div>
                <div class="price">
                    <i class="fas fa-wine-bottle" style="color:#ec3800;"></i> {{$vine->price}} руб
                    <i class="fas fa-wine-glass-alt"></i> {{$vine->price_cup}} руб
                </div>
                <div class="price">

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
