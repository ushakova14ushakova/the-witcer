'use strict';

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },
});

var menuButton = document.querySelector('.menu-btn');
var menu = document.querySelector('.header');

menuButton.addEventListener ('click', function () {
    menuButton.classList.toggle('menu-btn-active');
    menu.classList.toggle('header-active');
});