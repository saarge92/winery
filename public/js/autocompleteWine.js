$(document).ready(() => {
    $('#wine_name').keyup((event) => {
        var query = event.target.value;
        $("#wineList ul").empty();
        $('#wineList').css('display','none');
        if (query != '') {
            $.ajax({
                url: '/autocomplete?',
                type: 'GET',
                data: {
                    wine_name: query
                },
                success: (list) => {
                    $('#wineList').css('display','block');
                    if (list.wines.length != 0)
                    {
                        $("#wineList ul").empty();
                        $.each(list.wines,(index,wine)=>{
                            $('#wineList ul').append($("<li><a href='"
                                +"viewWine/" +wine.id+ "'>"+wine.name_rus+ "</a>"+
                            "</li>"));
                        })
                    }
                },
                error: (error) => {
                     $('#wineList').css('display','none');
                    console.log(error);
                }
            });
        }
    });
});
