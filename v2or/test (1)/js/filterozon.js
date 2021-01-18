function showMarkersozon(minValue, maxValue) {
    $(".filter_marker1").hide().filter(function () {
        var value = parseInt($(this).data("percentage"), 10);
        return value >= minValue && value <= maxValue;
    }).show();
}

$(function () {
    var options = {
        range: true,
        min: 0,
        max: 240,
        classes: {"ui-slider": "ui-widget-content2",
                    "ui-slider-handle": "ui-slider-handle"},
        values: [0, 240],
        slide: function (event, ui) {
            var min = ui.values[0],
                max = ui.values[1];

            $("#amount1").val(min + " - " + max );
            showMarkersozon(min, max);
        }
    }, min, max;

    $("#slider-range1").slider(options);

    min = $("#slider-range1").slider("values", 0);
    max = $("#slider-range1").slider("values", 1);

    $("#amount1").val(min  + " - " + max );

    showMarkersozon(min, max);
});
