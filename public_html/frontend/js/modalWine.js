$('.wine').on('click touchstart', function(event) {
    $("#wineModal").modal({
        show: true
    });
    //Get Card's elements
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
    var volume = Card.find('.volume_info');
    var sort_contain = Card.find('.sort_contain');
    var producer = Card.find('.producer');

    //initialize node elements of modal
    if(year.val())
    {
        $('#year-block').css('display','block');
        $('#year').text(year.val()+" г");
    }
    else{
        $('#year-block').css('display','none');
    }
    if(region_name.text().trim() != '')
    {
        $('#region-block').css('display','block');
        $("#region_name").text(region_name.text());
    }
    else{
        $('#region-block').css('display','none');
    }
    if(price_cup.length != 0)
    {
        $('#price_cup-block').css('display','block');
        $('#price_cup').text(price_cup.text());
    }
    else{
        $('#price_cup-block').css('display','none');
    }
    $('#image_wine').attr('src', image_src.attr('src'));
    $('#name_rus').text(wine_name_rus.text());
    $('#color_wine').text(wine_color.text());
    $('#sweet_wine').text(wine_sweet.text());
    $("#country_wine").text(wine_country.text());
    $('#strength').text(strength.val()+" %");

    $("#price_bottle").text(price_bottle.text());
    $("#volume").text(volume.text());
    if(sort_contain.val())
    {
        $("#sort_contain-block").css('display','block');
        var clone_column = $('#sort_contain .column');
        $('#sort_contain').empty();
        $('#sort_contain').append(clone_column);
        $('#sort_contain').append(sort_contain.val());
    }
    else{
        $("#sort_contain-block").css('display','none');
    }

    $("#producer").text(producer.val());
});
