$(function() {
    $("#slider_price").slider({
        min: minPriceEnable,
        max: maxPriceEnable,
        step: 100,
        range: true,
        orientation: 'horizontal',
        value: [current_minPrice, currentMaxPrice],
    }).on('change', (event) => {
        const _values = event.target.value;
        $("#price_min").val(_values[0]);
        $("#price_max").val(_values[1]);
        setTimeout(() => {
            $(".priceSlider").trigger('change');
        }, 500);
    });

    $("#volume_slider").slider({
        min: 0,
        max: maxVolumeEnable,
        step: 100,
        range: true,
        orientation: 'horizontal',
        value: [current_minVolume, current_maxVolume],
    }).on('change', (event) => {
        const _values = event.target.value;
        console.log(_values);
        $('#volume_min').val(_values[0]);
        $('#volume_max').val(_values[1]);
        setTimeout(() => {
            $('#volume_min').trigger('change');
            $('#volume_max').trigger('change');
        }, 500);
    });
});
