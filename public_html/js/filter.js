$('.filter_checked').change(function(event){
    $.ajax({
        url: '/getCountOfChoice',
        type: 'POST',
        dataType: 'json',
        data: {
            _token: $('meta[name="csrf-token"]').attr('content'),
            params: $('#filter_form').serialize()
        },
        beforeSend: function(){
            $('.ajax-loader').css('display', 'block');
            $('.filter_count').css('display', 'none');
        },
        success: function(message){
            $('.ajax-loader').css('display', 'none');
            $('.filter_count').css('display', 'block');
            $('#count_choosen').text(message.all);
            if($(event.target).hasClass('sub-menu')){
                $(event.target).next('label').after($('.filter_count'));
            }
            else{
                var parentElement = event.target.parentElement;
                $(parentElement).prepend($('.filter_count'));
                $(this).parent('div').append($('.filter_count'));
            }

        },
        error: function(error){
            console.log(error);
            $('.ajax-loader').css('display', 'none');
        }
    });
});
$('#showButton').click(function(){
    $("#filter_form").submit();
});
$('#close_counter').click(function(){
    $('.filter_count').css('display','none');
});
$('#toggle_country').on('click',function(){
    const country_value = $('#country_visible').val();
    if (country_value == 0) {
        $('#country_visible').val(1);
        $('#country_block').css('display', 'block');
        $('#country_icon').removeClass('fas fa-plus');
        $('#country_icon').addClass('fas fa-minus');
    } else {
        $('#country_visible').val(0);
        $('#country_block').css('display', 'none');
        $('#country_icon').removeClass('fas fa-minus');
        $('#country_icon').addClass('fas fa-plus');
    }
});

$('#toggle_color').click(function(){
    const country_value = $('#color_visible').val();
    if (country_value == 0) {
        $('#color_visible').val(1);
        $('#color_block').css('display', 'block');
        $('#color_icon').removeClass('fas fa-plus');
        $('#color_icon').addClass('fas fa-minus');
    } else {
        $('#color_visible').val(0);
        $('#color_block').css('display', 'none');
        $('#color_icon').removeClass('fas fa-minus');
        $('#color_icon').addClass('fas fa-plus');
    }
});

$('#toggle_sweet').click(function(){
    const country_value = $('#sweet_visible').val();
    if (country_value == 0) {
        $('#sweet_visible').val(1);
        $('#sweet_block').css('display', 'block');
        $('#sweet_icon').removeClass('fas fa-plus');
        $('#sweet_icon').addClass('fas fa-minus');
    } else {
        $('#sweet_visible').val(0);
        $('#sweet_block').css('display', 'none');
        $('#sweet_icon').removeClass('fas fa-minus');
        $('#sweet_icon').addClass('fas fa-plus');
    }
});
$("#clear-btn").click(function(event){
     window.location.hash = $(event.target).attr('href');
     window.location.reload();
})
