$('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    slideTransition: 'linear',
    responsiveClass:true,
    autoplayTimeout: 1000,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5.5
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

// animation rectangle
