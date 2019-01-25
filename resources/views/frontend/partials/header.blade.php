<!-- Navigation -->
<div class="fixed-top bg-dark">
    <div class="row contact-block d-none d-xs-none d-lg-flex">
        <div class="mr-auto">
            <a href="tel:456-500" class="email_info"><i class="fas fa-phone"></i>456-500</a>
        </div>
        <div class="mr-4">
            <div class="email_info">
                <i class="fas fa-map-marker-alt"></i> Астрахань, ул.Красного знамени, 12
            </div>
        </div>
    </div>
    <div class="navbar  navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="{{route('home')}}"><img id="logo_img" src="{{asset('icons/barhouse_logo.png')}}" alt=""></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="{{Route::currentRouteName()=='home' ? '#vines' : route('home')}}"> <i class="fas fa-wine-bottle"></i> Вино</a>
                    </li>
                </ul>
                <div class="d-block d-lg-none mobile-contact">
                    <div class="row">
                        <div class="col-12">
                            <a href="tel:+456-500" class=""><i class="fas fa-phone"></i>456-500</a>
                        </div>
                        <div class="col-12" style="color:white;">
                            <i class="fas fa-map-marker-alt"></i> Астрахань, ул.Красного знамени, 12
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>