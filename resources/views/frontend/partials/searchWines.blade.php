<div class="row mt-2">
    <div class="col-md-12">
        <form class="" action="{{route('search')}}#vines" method="GET">
            <div class="row">
                <div class="col-10 col-md-11 offset-md-0 col-lg-8 offset-lg-3">
                    <input type="text" name="wine_name" id="wine_name" label="Поиск вина" class="form-control">
                    <div id="wineList">
                        <ul></ul>
                    </div>
                </div>
                <div>
                    <button type="submit" class="btn btn-danger">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
