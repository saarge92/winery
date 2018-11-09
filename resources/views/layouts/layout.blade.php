<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Винная карта BARHOUSE">
    <meta name="author" content="Дурдыев Сердар">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <link rel="icon" href="{{asset('icons/wine-bottle.png')}}">
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
