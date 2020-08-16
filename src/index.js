
import './scss/main.scss';

// section scss
import '../src/scss/section/_header.scss';
import '../src/scss/section/_menu.scss';
import '../src/scss/section/_slider.scss';
import '../src/scss/section/_footer.scss';


// modules js
import index from './js/index';
// import slider from './js/slider';

import Swiper from 'swiper';
import $ from "jquery";
import gsap from "gsap";



var swiper = new Swiper('#header-slider', {
    direction: 'vertical',
    loop: true,
    effect: 'slide',
    speed: 600,
    parallax: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


let width = window.innerWidth;
let height = window.innerHeight;


$('.slider-item').each((i, item) => {

    gsap.to(item, {
        clip: `rect(0px, ${width}px, ${height}px, 0px)`,
    });

});


swiper.on('slideChange', function () {

    $('.slider-item').each((i, item) => {

        gsap.to(item, {
            clip: `rect(0px, ${width}px, ${height}px, ${width}px)`,
            duration: .6,
        });

        gsap.to(`.slider-item__${swiper.realIndex}`, {
            clip: `rect(0px, ${width}px, ${height}px, 0px)`,
            duration: .6,
        });

    });

});


$(document).ready(function () {

    $('#header-slider').on('wheel', function (e) {

        var round = Math.round(e.originalEvent.deltaY);

        if (Math.sign(round) === 1) {

            swiper.slideNext(600, true);

            // gsap.to(`.slider-item__${swiper.realIndex}`, {
            //     clip: `rect(0px, ${width}px, ${height}px, 0px)`,
            //     duration: .6,
            // })

        } else {
            swiper.slidePrev(600, true);

            // gsap.to(`.slider-item__${swiper.realIndex}`, {
            //     clip: `rect(0px, ${width}px, ${height}px, 0px)`,
            //     duration: .6,
            // })

        }

    })

})


// is-active