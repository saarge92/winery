@foreach ($vines_for_review->chunk(3) as $vine_chink)
<div class="row">
    @foreach($vine_chink as $vine)
    <div class="col-md-4 col-sm-6 mb-3 mt-2 col-sm-6 {{ $vine->is_active ? '' : 'inactive' }}">
        <div class="card">
            @include('admin.partials.activate_disable_vine')
            <div class="image-holder">
                <img src="{{$vine->image_src ? Storage::url($vine->image_src) : Storage::url('projectFolders/unknow.png')}}">
                </img>
            </div>
            <div class="description">
                {{$vine->name_rus}},
                {{$vine->color}} {{$vine->sweet}},
                {{$vine->country}} {{$vine->year}} г,
                <i class="fas fa-wine-bottle">
                </i>
                {{$vine->price}} руб,
                <i class="fas fa-wine-glass">
                </i>
                {{$vine->price_cup}} руб,
                {{$vine->volume / 1000}} л
            </div>
            <div class="button-holder">
                <a class="text-white btn btn-success" href="{{route('editVine',['id'=>$vine->id])}}">
                    <i class="fas fa-search-plus">
                    </i>
                    Посмотреть
                </a>
            </div>
        </div>
    </div>
    @endforeach
</div>
@endforeach
<div class="row">
    <div class="col-md-12">
        {{$vines->appends($_GET)->links()}}
    </div>
</div>
