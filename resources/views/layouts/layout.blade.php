<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Винная карта BARHOUSE">
    <meta name="author" content="Дурдыев Сердар">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>@yield('title')</title>

    <link href="{{URL::asset('frontend/vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{URL::asset('frontend/css/modern-business.css')}}" rel="stylesheet">
    <link href="{{URL::asset('css/fontawesome/all.min.css')}}" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.2.3/css/bootstrap-slider.min.css">
    <link rel="stylesheet" href="{{URL::asset('css/mystyle.css')}}">
    @yield('styles')
</head>

<body>
    @include('frontend.partials.header')
    @yield('content')
    @include('frontend.partials.footer')
    <!-- Bootstrap core JavaScript -->
    <script src="{{URL::asset('frontend/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{URL::asset('frontend/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{URL::asset('js/fontawesome/all.min.js')}}"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.2.3/bootstrap-slider.min.js"></script>
    @yield('scripts')
</body>

</html>
