$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > window.innerHeight - 100) {
        $('header').addClass('black');
    } else {
        $('header').removeClass('black');
    }
});

$('.main-menu li').click(function () {
    $('header').addClass('black');
    var height = $(window).scrollTop();
    if(height < window.innerHeight - 100) {
        $('header').removeClass('black');
    }
})