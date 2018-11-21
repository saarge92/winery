<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Винная карта BARHOUSE">
    <meta name="author" content="Дурдыев Сердар">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <link rel="icon" href="{{asset('icons/wine-bottle.png')}}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ elixir('frontend/frontend.css') }}">
    @yield('styles')
</head>

<body>
    @include('frontend.partials.header')
    @yield('content')
    @include('frontend.partials.footer')
    <script type="text/javascript" src="{{elixir('frontend/frontend.js')}}"></script>
    @yield('scripts')
</body>

</html>
