$(document).ready(function() {
     

    // Global Variables
    window_width = $(window).width();


    $('.menu_bar').on('click', function() {
        $('.nav_items').toggleClass('toogle_nav_overly');
        $('.nav_item_menu').toggleClass('toggle_mobile_nav');

        $('body').toggleClass('disable_scoll');
        $('.menu_barln1').toggleClass('menu_bar_x_trans1');
        $('.menu_barln2').toggleClass('menu_bar_x_trans2');
        $('.menu_barln3').toggleClass('menu_bar_x_trans3');
        $('.comp_logo').toggleClass('fixed_logo');
    });
    

    function SwapMe(){

    // used insertBefore
    // used insertAfter
    // $('.logo_con').insertAfter('.header_info_nav');
    // $('.btm_center_img').insertBefore('.btm_left_content');
    

    }

    SwapMe();

    $(window).resize(function () {
        window_width = $(this).width();

        if(window_width <= 1000){
            //add function for swaping position or insert element
            // $('.btm_center_img').insertAfter('.btm_left_content');
        }else{
            //add function for reset position of the element
            // $('.btm_center_img').insertBefore('.btm_right_content');
        }

        SwapMe();
    });


    // Owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:2,
                nav:false,
                loop:true,
                autoplay:true,
            }
        }
    })


});

