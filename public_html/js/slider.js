$(function() {
    $("#slider_price").slider({
        min: minPriceEnable,
        max: maxPriceEnable,
        step: 100,
        range: true,
        orientation: 'horizontal',
        values: [current_minPrice, currentMaxPrice],
        slide: function(event, ui) {
            $('#price_min').val(ui.values[0]);
            $('#price_max').val(ui.values[1]);
            setTimeout(()=>{
                $('#price_min').trigger('change');
                $('#price_max').trigger('change');
            },400)
        }
    });
    $("#slider_price").draggable();
    $("#volume_slider").slider({
        min: 0,
        max: maxVolumeEnable,
        orientation: 'horizontal',
        values: [current_minVolume, current_maxVolume],
        slide: function(event, ui) {
            $('#volume_min').val(ui.values[0]);
            $('#volume_max').val(ui.values[1]);
            setTimeout(()=>{
                $('#volume_min').trigger('change');
                $('#volume_max').trigger('change');
            },400)
        }
    });
});
