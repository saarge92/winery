<!-- Modal -->
<div class="modal fade" id="wineModal" tabindex="-1" role="dialog" aria-hidden="true" style="display:none">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Информация о вине</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-3">
                        <img id="image_wine" src="">
                    </div>
                    <div class="col-8">
                        <div class="row">
                            <div class="mr-auto">
                                <span class="column">Название</span>:
                                <span id="name_rus"></span>
                            </div>
                            <div class="mr-auto">
                                <span class="column">Цвет</span>:
                                <span id="color_wine"></span>
                            </div>
                            <div class="mr-auto">
                                <span class="column">Сахар</span>:
                                <span id="sweet_wine"></span>
                            </div>
                            <div class="mr-auto">
                                <span class="column">Страна</span>:
                                <span id="country_wine"></span>
                            </div>
                            <div class="mr-auto">
                                <span class="column">Регион</span>:
                                <span id="region_name"></span>
                            </div>
                            <div class="mr-auto">
                                <span class="column">Крепость</span>:
                                <span id="strength"></span>
                            </div>
                            <div class="mr-auto">
                                <span class="column">Год</span>:
                                <span id="year"></span>
                            </div>
                            <div class="mr-auto">
                                <span class="column">Объем</span>:
                                <span id="volume"></span>
                            </div>
                            <div class="mr-auto">
                                <span class="column">Цена за бокал</span>:
                                <span id="price_cup"></span> <i class="fas fa-ruble-sign"></i>
                            </div>
                            <div class="mr-auto">
                                <span class="column">Цена за бутылку</span>:
                                <span id="price_bottle"></span> <i class="fas fa-ruble-sign"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" data-dismiss="modal" class="btn btn-success mx-auto" id="ok_btn">ОК</button>
            </div>
        </div>
    </div>
</div>
