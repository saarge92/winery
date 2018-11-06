$('.filter_checked').change((event) => {
    console.log($('meta[name="csrf-token"]').attr('content'));
    $.ajax({
        url: '/getCountOfChoice',
        type: 'POST',
        dataType: 'json',
        data: {
            _token: $('meta[name="csrf-token"]').attr('content'),
            params: $('#filter_form').serialize()
        },
        beforeSend: () => {
            $('.ajax-loader').css('display', 'block');
            $('.filter_count').css('display', 'none');
        },
        success: (message) => {
            $('.ajax-loader').css('display', 'none');
            $('.filter_count').css('display', 'block');
            $('#count_choosen').text(message.all);
            var parentElement = event.target.parentElement;
            $(parentElement).prepend($('.filter_count'));
            $(this).parent('div').append($('.filter_count'));
        },
        error: () => {
            $('.ajax-loader').css('display', 'none');
        }
    });
});
$('#showButton').click(() => {
    $("#filter_form").submit();
});
