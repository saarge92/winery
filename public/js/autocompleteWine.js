$(document).ready(() => {
    $('#wine_name').keyup((event) => {
        var query = event.target.value;
        $("#wineList ul").empty();
        if (query != '') {
            $.ajax({
                url: '/autocomplete?',
                type: 'GET',
                data: {
                    wine_name: query
                },
                success: (list) => {
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
                    console.log(error);
                }
            });
        }
    });
});
