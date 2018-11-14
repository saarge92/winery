<div class="row" style="width:100%;">
    @if($vine->is_active == true)
        <div class="col-lg-4 offset-lg-1 mt-2 col-4 offset-2 offset-md-0 col-md-8">
            <form action="{{route('deactivateVine',['id'=>$vine->id])}}" method="POST">
                {{csrf_field()}}
                <button type="subimt" class="btn btn-outline-danger deactivate-btn">Деактивировать</button>
            </form>
        </div>
        @else
        <div class="col-lg-4 offset-lg-1 mt-2 col-4 offset-2 offset-md-0 col-md-8">
            <form class="" action="{{route('activateVine',['id'=>$vine->id])}}" method="post">
                {{csrf_field()}}
                <button type="subimt" class="btn btn-outline-primary deactivate-btn">Активировать</button>
            </form>
        </div>
        @endif
        <div class="col-6 offset-3 offset-md-2 col-md-3 mt-2">
            <form action="{{route('deleteVine',['id'=>$vine->id])}}" method="POST">
                {{csrf_field()}}
                <button type="submit" class="btn btn-outline-dark delete">
                    <i class="fas fa-times"></i>Удалить
                </button>
            </form>
        </div>
</div>
