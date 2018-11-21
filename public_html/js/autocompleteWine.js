$(document).ready(function(){
    $('#wine_name').keyup(function(event){
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
                success: function(list){
                    if (list.wines.length != 0)
                    {
                        $('#wineList').css('display','block');
                        $("#wineList ul").empty();
                        $.each(list.wines,function(index,wine){
                            $('#wineList ul').append($("<li><a href='"
                                +searchLink +wine.id+ "#vines'>"+wine.name_rus+ "</a>"+
                            "</li>"));
                        })
                    }
                    else{
                        $('#wineList').css('display','none');
                    }
                },
                error: function(error){
                     $('#wineList').css('display','none');
                    console.log(error);
                }
            });
        }
    });
});
