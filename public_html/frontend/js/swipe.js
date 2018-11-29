$('.nav-link').click(function(event) {
    $('#navbarResponsive').removeClass('show');
});
//On touch swipe
$(".carousel").on("touchstart", function(event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > 5) {
            $(this).carousel('next');
        } else if (Math.floor(xClick - xMove) < -5) {
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function() {
        $(this).off("touchmove");
    });
});
$(document).ready(function() {
    // $('.back-to-top').css('display','none');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });
});
