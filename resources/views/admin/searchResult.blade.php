@extends('layouts.admin_panel')
@include('admin.partials.modal')
@section('content')
    <div class="container">
        <p>Результаты поиска : {{($_GET['wine_name'])}}</p>
        @if(count($vines_for_review))
            @include('admin.partials.listVinesAdmin')
        @else
            <p>К сожалению, ничего не найдено</p>
        @endif
    </div>
@endsection

@section('scripts')
    <script src="{{URL::asset('admin/js/forModal.js')}}"></script>
@endsection
