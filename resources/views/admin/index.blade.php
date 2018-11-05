@include('admin.partials.modal')
@extends('layouts.admin_panel')

@section('content')

<div class="row">
    <div class="col-md-4">
        <a class="btn text-white btn-danger" href="{{route('createVine')}}">
            <i class="fas fa-plus"></i>Добавить вино
        </a>
    </div>
    <div class="col-md-4">
        <a class="btn btn-outline-secondary" href="{{route('allSweets')}}">
            Сладость вин
        </a>
    </div>
    <div class="col-md-4">
        <a class="btn btn-outline-secondary" href="{{route('allColors')}}">
            Цвета вин
        </a>
    </div>
</div>
@include('admin.partials.listVinesAdmin')
@endsection

@section('scripts')
<script src="{{URL::asset('admin/js/forModal.js')}}"></script>
@endsection
