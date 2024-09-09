$(document).ready(function() {
     

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

