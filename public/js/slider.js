$(function() {
    $("#slider_price").slider({
        min: 0,
        max: 100,
        step: 1,
        values: [10, 90],
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });

    $("input.sliderValue").change(function() {
        var $this = $(this);
        $("#sliders").slider("values", $this.data("index"), $this.val());
    });
})
