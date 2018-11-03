<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>@yield('title')</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="BarHouse" name="keywords">
    <meta content="Винная карта BarHouse" name="description">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="author" content="Сердар Дурдыев">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700|Raleway:300,400,400i,500,500i,700,800,900" rel="stylesheet">
    <link href="{{URL::asset('templates/lib/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{URL::asset('templates/lib/nivo-slider/css/nivo-slider.css')}}" rel="stylesheet">
    <link href="{{URL::asset('templates/lib/owlcarousel/owl.carousel.css')}}" rel="stylesheet">
    <link href="{{URL::asset('templates/lib/owlcarousel/owl.transitions.css')}}" rel="stylesheet">
    <link href="{{URL::asset('templates/lib/font-awesome/css/font-awesome.min.css')}}" rel="stylesheet">
    <link href="{{URL::asset('templates/lib/animate/animate.min.css')}}" rel="stylesheet">
    <link href="{{URL::asset('templates/lib/venobox/venobox.css')}}" rel="stylesheet">
    <link href="{{URL::asset('templates/css/nivo-slider-theme.css')}}" rel="stylesheet">
    <link href="{{URL::asset('templates/css/style.css')}}" rel="stylesheet">
    <link href="{{URL::asset('templates/css/responsive.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{URL::asset('css/all.min.css')}}">
</head>

<body data-spy="scroll" data-target="#navbar-example">
    <div id="preloader"></div>

    @include('frontend.partials.header')

    @yield('content')

    @include('frontend.partials.footer')

    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

    <script src="{{URL::asset('templates/lib/jquery/jquery.min.js')}}"></script>
    <script src="{{URL::asset('templates/lib/bootstrap/js/bootstrap.min.js')}}"></script>
    <script src="{{URL::asset('templates/lib/owlcarousel/owl.carousel.min.js')}}"></script>
    <script src="{{URL::asset('templates/lib/venobox/venobox.min.js')}}"></script>
    <script src="{{URL::asset('templates/lib/knob/jquery.knob.js')}}"></script>
    <script src="{{URL::asset('templates/lib/wow/wow.min.js')}}"></script>
    <script src="{{URL::asset('templates/lib/parallax/parallax.js')}}"></script>
    <script src="{{URL::asset('templates/lib/easing/easing.min.js')}}"></script>
    <script src="{{URL::asset('templates/lib/nivo-slider/js/jquery.nivo.slider.js')}}" type="text/javascript"></script>
    <script src="{{URL::asset('templates/lib/appear/jquery.appear.js')}}"></script>
    <script src="{{URL::asset('templates/lib/isotope/isotope.pkgd.min.js')}}"></script>
    <script src="{{URL::asset('templates/js/main.js')}}"></script>
    <script src="{{URL::asset('js/fontawesome/all.min.js')}}"></script>
    <script src="{{URL::asset('js/filter.js')}}"> </script>
    <script src="{{URL::asset('js/autocompleteWine.js')}}"></script>
</body>

</html>
