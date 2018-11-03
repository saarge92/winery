<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Сердар Дурдыев">

    <title>Админ панель</title>

    <link href="{{URL::asset('admin/css/bootstrap.min.css')}}" rel="stylesheet">

    <!-- Custom fonts for this template-->
    <link href="{{URL::asset('css/fontawesome/all.min.css')}}" rel="stylesheet" type="text/css">

    <!-- Custom styles for this template-->
    <link href="{{URL::asset('admin/css/sb-admin.css')}}" rel="stylesheet">

</head>

<body id="page-top">
    @include('admin.partials.messages')
    @include('admin.partials.header')
    <div id="wrapper">
        @include('admin.partials.sidebar')
        <div class="content-wrapper" id="main_content">
            <div class="container-fluid mt-2">
                @include('admin.partials.errors')
                @yield('content')
            </div>
        </div>
    </div>

    @include('admin.partials.logout')

    <script src="{{URL::asset('admin/js/jquery.min.js')}}"></script>
    <script src="{{URL::asset('admin/js/bootstrap.bundle.min.js')}}"></script>

    <script src="{{URL::asset('admin/js/jquery.easing.min.js')}}"></script>

    <script src="{{URL::asset('admin/js/sb-admin.min.js')}}"></script>

    <script src="{{URL::asset('js/fontawesome/all.min.js')}}"></script>
    <script src="{{URL::asset('js/autocompleteWine.js')}}"></script>
    @yield('scripts')
</body>

</html>
