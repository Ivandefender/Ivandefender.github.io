let backColor = document.querySelector('.header__inner-menu');
// let backBlur = document.querySelector('.header__inner-menu');
let listItems = document.querySelector('.menu__list');
let link = document.querySelector('.bbm');

link.addEventListener('click', linkClick);

function linkClick(event) {
    event.preventDefault();
    //backBlur.style.backdropfilter = backBlur.style.backdropfilter === 'transparent' ? 'blur(40.7742px)' : 'transparent';
    backColor.style.display = backColor.style.display === 'none' ? 'block' : 'none';
    backColor.style.background = backColor.style.background === 'transparent' ? 'rgba(0, 0, 0, 0.9)' : 'transparent';
    listItems.style.display = listItems.style.display === 'none' ? 'block' : 'none';
}


$(function() {
    $('.crew__slider').slick({
        arrows: false,
        dots: true,
        vertical: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false
                }
            }
        ]
    })

    // $('.menu__btn').on('click', function(){
    //     $('.menu__list').toggleClass('menu__list--active');
    // })

    $('.slider-slick').slick({
        arrows: false,
        dots: true,
        vertical: false,
        
    })

    $('.crew__slider').slick({
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

