$('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    slideTransition: 'linear',
    responsiveClass:true,
    autoplayTimeout: 2000,
    smartSpeed: 2000,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    },
})
$('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    slideTransition: 'linear',
    responsiveClass:true,
    autoplayTimeout: 2000,
    smartSpeed: 2000,
    rtl: true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
})