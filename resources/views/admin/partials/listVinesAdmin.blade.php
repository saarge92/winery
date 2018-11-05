@foreach ($vines_for_review->chunk(3) as $vine_chink)
<div class="row">
    @foreach($vine_chink as $vine)
    <div class="col-md-4 col-sm-6 mb-3 mt-2 col-sm-6 {{ $vine->status ? '' : 'inactive' }}">
        <div class="card">
            @include('admin.partials.activate_disable_vine')
            <div class="image-holder">
                <img src="{{$vine->image_src ? Storage::url($vine->image_src) : Storage::url('projectFolders/unknow.png')}}">
            </div>
            <div class="description">
                {{$vine->name_rus}}
                {{$vine->color}} {{$vine->sweet}}
                {{$vine->country}} {{$vine->year}}
                {{$vine->price}} руб
            </div>
            <div class="button-holder">
                <a href="{{route('editVine',['id'=>$vine->id])}}" class="text-white btn btn-success">
                    <i class="fas fa-search-plus"></i> Посмотреть
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