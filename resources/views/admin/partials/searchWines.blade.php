<div class="row mt-1">
    <div class="col-md-12">
        <form class="" action="{{route('searchAdminWines')}}" method="GET">
            <div class="row">
                <div class="col-9 col-md-11 offset-md-0 col-lg-11">
                    <input type="text" name="wine_name" id="wine_name" label="Поиск вина" class="form-control">
                    <div id="wineList">
                        <ul></ul>
                    </div>
                </div>
                <div class="mt-1">
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
