$('.wine').on('click touchstart', function(event) {
    $("#wineModal").modal({
        show: true
    });
    var Card = $(event.target).closest('.card');
    var image_src = Card.find('.wine_img');
    var wine_name_rus = Card.find('.name_rus');
    var wine_color = Card.find('.color_wine');
    var wine_sweet = Card.find('.sweet_wine');
    var wine_country = Card.find('.country_wine');
    var region_name = Card.find('.region_name');
    var strength =  Card.find('.strength');
    var year = Card.find('.year');
    var price_cup = Card.find('.price_cup');
    var price_bottle = Card.find('.price_bottle');
    var volume = Card.find('.volume');
    var sort_contain = Card.find('.sort_contain');
    var producer = Card.find('.producer');
    $('#image_wine').attr('src', image_src.attr('src'));
    $('#name_rus').text(wine_name_rus.text());
    $('#color_wine').text(wine_color.text());
    $('#sweet_wine').text(wine_sweet.text());
    $("#country_wine").text(wine_country.text());
    $("#region_name").text(region_name.text());
    $('#strength').text(strength.val()+" %");
    $('#year').text(year.val()+" г");
    $('#price_cup').text(price_cup.text());
    $("#price_bottle").text(price_bottle.text());
    $("#volume").text(volume.text());
    $("#sort_contain").append(sort_contain.val());
    $("#producer").text(producer.val());
});
