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


$(document).ready(function () {

    // Slider
    var swiper = new Swiper('#header-slider', {
        direction: 'vertical',
        loop: true,
        effect: 'slide',
        speed: 1000,
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


    // Init bg
    $('.slider-item').each((i, item) => {
        // Очищаем все фоны 
        gsap.to(item, {
            clip: `rect(0px, ${width}px, ${height}px, ${width}px)`,
        });


        // Задаём анимацию активному фону
        gsap.to(`.slider-item__${swiper.realIndex}`, {
            clip: `rect(0px, ${width}px, ${height}px, 0px)`,
        });

    });










    // Смена слайдера
    swiper.on('slideChange', function () {

        $('.slider-item').each((i, item) => {
            // Очищаем все фоны 
            gsap.to(item, {
                clip: `rect(0px, ${width}px, ${height}px, ${width}px)`,
                duration: 1,
            });



            // Задаём анимацию активному фону
            gsap.to(`.slider-item__${swiper.realIndex}`, {
                clip: `rect(0px, ${width}px, ${height}px, 0px)`,
                duration: 1,
            });

        });

    });



    $('#header-slider').on('wheel', function (e) {

        var round = Math.round(e.originalEvent.deltaY);

        if (Math.sign(round) === 1) {

            swiper.slideNext(1000, true);

        } else {
            swiper.slidePrev(1000, true);
        }

    });


    $('#app').on('mousemove', function (e) {

        gsap.to(`.cursor`, {
            transform: `translate(${e.originalEvent.clientX - 15}px, ${e.originalEvent.clientY - 15}px)`,
            duration: .3,
        });

    });


    $('.menu a').on('mouseover', function (e) {

        gsap.to(`.cursor`, {
            width: `60px`,
            height: `60px`,
            border: `2px solid #eeeeee59`,
            top: `-10px`,
            left: `-10px`,
            duration: .6,
        });

    });

    $('.menu a').on('mouseout', function (e) {

        gsap.to(`.cursor`, {
            width: `30px`,
            height: `30px`,
            border: `2px solid #eeeeee59`,
            top: `0`,
            left: `0`,
            duration: .6,
        });

    });


    $('.article').on('mouseover', function (e) {

        gsap.to(`.cursor`, {
            width: `60px`,
            height: `60px`,
            border: `2px solid #eeeeee59`,
            top: `-10px`,
            left: `-10px`,
            duration: .6,
        });

    });

    $('.article').on('mouseout', function (e) {

        gsap.to(`.cursor`, {
            width: `30px`,
            height: `30px`,
            border: `2px solid #eeeeee59`,
            top: `0`,
            left: `0`,
            duration: .6,
        });
    });


    $('.navigat-wrap__box').on('mouseover', function (e) {

        gsap.to(`.cursor`, {
            width: `60px`,
            height: `60px`,
            border: `2px solid #eeeeee59`,
            top: `-10px`,
            left: `-10px`,
            duration: .6,
        });

    });

    $('.navigat-wrap__box').on('mouseout', function (e) {

        gsap.to(`.cursor`, {
            width: `30px`,
            height: `30px`,
            border: `2px solid #eeeeee59`,
            top: `0`,
            left: `0`,
            duration: .6,
        });

    });


    

    










    // Cursor - grabbing
    $('.header').on('mousedown', function (e) {

        gsap.to(`.header`, {
            cursor: `grabbing`
        });
    
    });

    $('.header').on('mouseup', function (e) {

        gsap.to(`.header`, {
            cursor: `grab`
        });
    
    });
[]
});


// is-active