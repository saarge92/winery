@include('frontend.partials.slider')
    @include('frontend.partials.countOfFilter')
    @include('frontend.partials.modalWine')
<div>
    @include('frontend.partials.loader')
    <div class="container" id="vines">
    @include('frontend.partials.searchWines')
        <div class="row">
            <div class="col-lg-3 my-2">
    @include('frontend.partials.form_filter')
            </div>
            <div class="col-lg-9">
                @yield('content')
            </div>
        </div>
    </div>

</div>