$(function() {
    $("#slider_price").slider({
        min: minPriceEnable,
        max: maxPriceEnable,
        step: 100,
        values: [current_minPrice, currentMaxPrice],
        slide: function(event, ui) {
            $('#price_min').val(ui.values[0]);
            $('#price_max').val(ui.values[1]);
        }
    });

    $("#volume_slider").slider({
        min: minVolumeEnable,
        max: maxVolumeEnable,
        step: 100,
        values: [current_minVolume, current_maxVolume],
        slide: function(event, ui) {
            $('#volume_min').val(ui.values[0]);
            $('#volume_max').val(ui.values[1]);
        }
    });
});
