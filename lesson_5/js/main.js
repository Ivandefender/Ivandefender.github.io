$(function() {
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false
                }
            }
        ]
    })

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    })

    $('.slider-slick').slick({
        arrows: false,
        dots: true,
        vertical: true,
        
    })

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1140,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 840,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    })
});

