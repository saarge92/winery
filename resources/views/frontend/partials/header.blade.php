<!-- Navigation -->
<div class="fixed-top bg-dark">
    {{-- <div class="row">
        azaza
    </div> --}}
    <div class="navbar  navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="{{route('home')}}"><span id="bar">BAR</span>HOUSE</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="{{Route::currentRouteName()=='home' ? '#vines' : route('home')}}"> <i class="fas fa-wine-bottle"></i> Вино</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
