<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Сердар Дурдыев">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous">
    <link rel="stylesheet" href="{{elixir('admin/admin.css')}}"> @yield('styles')
</head>

<body id="page-top">
    @include('admin.partials.messages')
    @include('admin.partials.header')
    <div id="wrapper">
    @include('admin.partials.sidebar')
        <div class="content-wrapper" id="main_content">
            <div class="container-fluid mt-2">
    @include('admin.partials.errors') @yield('content')
            </div>
        </div>
    </div>
    @include('admin.partials.logout')
    <script type="text/javascript" src="{{elixir('admin/admin.js')}}"></script>
    @yield('scripts')
</body>

</html>