let backColor = document.querySelector('.header__inner-menu');
// let backBlur = document.querySelector('.header__inner-menu');
let listItems = document.querySelector('.menu__list');
let link = document.querySelector('.bbm');

link.addEventListener('click', linkClick);

function linkClick(event) {
    event.preventDefault();
    //backBlur.style.backdropfilter = backBlur.style.backdropfilter === 'transparent' ? 'blur(40.7742px)' : 'transparent';
    backColor.style.background = backColor.style.background === 'transparent' ? 'rgba(0, 0, 0, 0.9)' : 'transparent';
    listItems.style.display = listItems.style.display === 'none' ? 'block' : 'none';
}