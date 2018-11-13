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
});
