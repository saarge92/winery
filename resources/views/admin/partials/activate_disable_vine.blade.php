<form action="{{route('deleteVine',['id'=>$vine->id])}}" method="POST">
    {{csrf_field()}}
    <button type="submit" class="btn btn-default delete">
        <i class="fas fa-times"></i>Удалить
    </button>
</form>
@if($vine->status)
    <form action="{{route('deactivateVine',['id'=>$vine->id])}}" method="POST">
        {{csrf_field()}}
        <button type="subimt" class="btn btn-danger deactivate-btn">Деактивировать</button>
    </form>
    @else
    <form class="" action="{{route('activateVine',['id'=>$vine->id])}}" method="post">
        {{csrf_field()}}
        <button type="subimt" class="btn btn-danger deactivate-btn">Активировать</button>
    </form>
@endif
