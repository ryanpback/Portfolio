$(function() {
    $(window).resize(function() {
        if( $(window).width() > 770 ) {
            window.vm.mobile = false;
            if( $('.nav_left h1').hasClass('mobile_nav_bar_active_header') ) {
                $('.nav_left h1').removeClass('mobile_nav_bar_active_header');
            }
            if( $('.nav').hasClass('mobile_nav_bar_active') ) {
                $('.nav').removeClass('mobile_nav_bar_active');
            }
        }
    });
    $('body').on('touchstart click', '.threebars', function(event) {
        event.stopPropagation();
        event.preventDefault();
        window.vm.mobile = true;
        $(this).toggleClass('hamburger').toggleClass('cross');
        $('.nav_dropdown').slideToggle();
        $('.nav_left h1').toggleClass('mobile_nav_bar_active_header');
        $('.nav').toggleClass('mobile_nav_bar_active');
    });
});
