import './scss/main.scss';

// section scss
import '../src/scss/section/_header.scss';
import '../src/scss/section/_menu.scss';
import '../src/scss/section/_slider.scss';
import '../src/scss/section/_footer.scss';
import '../src/scss/section/_sidebar-menu.scss';


// modules js
import index from './js/index';
// import slider from './js/slider';

import Swiper from 'swiper';
import $ from "jquery";
import gsap from "gsap";
import Typed from 'typed.js';

import MenuAnime from './js/anime-menu';
import CursorAnime from './js/anime-cursor';
import initBG from './js/init-bg';
import SliderAnime from './js/anime-slider';
import Layers from './js/layers';
import Text from './js/anime-text';
import Article from './js/anime-article';
import delayAnime from './js/time';
import humburger from './js/humburger';
import sidebar from './js/anime-sidebar-menu';
import Preloader from './js/anime-preloader';

// Init humburger
humburger();

// Animate for menu
const menuAnime = new MenuAnime();

// Animate for сursor
const cursorAnime = new CursorAnime();

// Animate for сursor
const sliderAnime = new SliderAnime();

// Get layers blue bit BG
const layers = new Layers();

// Animate for title
const text = new Text;

// Animate for title  article
const article = new Article;

// Animate for  preloader
const preloader = new Preloader;

preloader.animeYoYo();


$(document).ready(function () {

    setTimeout(() => {
        $('#preloader').css({
            opacity: 0,
            visibility: `hidden`
        })
    }, 2000)



    // Переменная для разрешения переключения слайдера
    let goSlide = true;
    // Переменная для разрешения переключения слайдера end


    // MENU ##################################

    let viewMenuFastLine = true;
    $('.menu .menu__link').on('mouseover', function (e) {
        //  Длина в px ссылки
        let clientWidth = this.clientWidth;
        // Узел линии
        let fastLine = $(e.target).next();

        if (viewMenuFastLine) {

            viewMenuFastLine = false;

            // Анимация меню
            menuAnime.menuFastLine(e, clientWidth, fastLine) 
            delayAnime(() => { 
                viewMenuFastLine = true;
            }, 600);
        }

    });

    $('.menu a').on('mouseover', function (e) {
        // Анимация курсора (увеличение сферы) при наведении на меню
        cursorAnime.cursorIncrease();
    });

    $('.menu a').on('mouseout', function (e) {
        // Анимация курсора (уменьшение сферы) при наведении на меню
        cursorAnime.cursorDecrease();
    });
    // MENU END ###############################


    //  ARTICLE ##################################
    // Наведение курсора на article
    $('.article').on('mouseover', function (e) {
        // Анимация курсора (увеличение сферы) при наведении на меню
        cursorAnime.cursorIncrease();
    });

    // Наведение курсора на article
    $('.article').on('mouseout', function (e) {
        // Анимация курсора (уменьшение сферы) при наведении на меню
        cursorAnime.cursorDecrease();
    });

    //  ARTICLE END ##############################


    //  PAGINATION ##################################
    // Анимация курсора (увеличение сферы) при наведении на блок с навигацией
    $('.navigat-wrap__box').on('mouseover', function (e) {
        // Анимация курсора (увеличение сферы) при наведении на меню
        cursorAnime.cursorIncrease();
    });

    // Анимация курсора (уменьшение сферы) при наведении на блок с навигацией
    $('.navigat-wrap__box').on('mouseout', function (e) {
        // Анимация курсора (уменьшение сферы) при наведении на меню
        cursorAnime.cursorDecrease();
    });

    //  PAGINATION END ##############################

    // MOVECURSOR ##############################
    $('#app').on('mousemove', function (e) {
        let x = e.originalEvent.clientX - 15;
        let y = e.originalEvent.clientY - 15;
        // Движение сферы за курсором 
        cursorAnime.moveSphereForCursor(x, y);
    });

    // Cursor - grabbing
    $('.header').on('mousedown', function (e) {
        cursorAnime.grabbingCursor();
    });

    // Cursor - grab
    $('.header').on('mouseup', function (e) {
        cursorAnime.grabCursor();
    });

    // MOVECURSOR END ##############################


    // TITLE END ##############################

    // title.animeViewBottomToTop('.slider-item-one__box');

    // TITLE END ##############################



    // Typed ##############################

    // Анимация слов
    // function animeTyped(node, text) {
    //     new Typed(node, {
    //         strings: [text],
    //         typeSpeed: 60,
    //         smartBackspace: true
    //     });
    // }

    // animeTyped('#slider-item-one__last-title', 'мониторинг');

    // Typed END ##############################


    //  Инициализируем заголовок, описание, блоки статей ##############################

    // Скрываем заголовоки и показываем активный
    delayAnime(() => { text.animeViewText(`.title`, `.title__0`) }, 100);

    // Скрываем list-items и показываем активный
    delayAnime(() => { text.animeViewText(`.list-items`, `.list-items__0`) }, 300);

    // Скрываем article
    delayAnime(() => { article.animeViewBlock(`.article-wrap li`, `.article__li_0`) }, 600);

    //  Инициализируем заголовок, описание, блоки статей END ##############################



    // SLIDER ##############################

    let width = window.innerWidth;
    let height = window.innerHeight;

    var swiper = new Swiper('#header-slider', {
        direction: 'vertical',
        loop: true,
        delay: 3000,
        speed: 1500,
        effect: 'slide',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    // Смена слайдера
    swiper.on('slideChange', function () {

        $('.slider-item').each((i, item) => {
            let realIndex = swiper.realIndex;

            // Очищаем фоны и добавляем новый
            sliderAnime.clearBGandSetBGactive(item, width, height, realIndex);

            // Скрываем заголовоки и показываем активный
            delayAnime(() => { text.animeViewText(`.title`, `.title__${realIndex}`) }, 300);

            // Скрываем list-items и показываем активный
            delayAnime(() => { text.animeViewText(`.list-items`, `.list-items__${realIndex}`) }, 600);

            // Скрываем article
            delayAnime(() => { article.animeViewBlock(`.article-wrap li`, `.article__li_${realIndex}`) }, 900);
        });

    });



    // Инициализируем начальный слайд Gray BG
    layers.startViewLayer(`.animate__layer_0`, `.title__h1_0`);

    
    $('#header-slider').on('wheel', function (e) {


        // NEXT && PREV Slider && Gray BG
        var round = Math.round(e.originalEvent.deltaY);

        if (Math.sign(round) === 1) {

            // swiper.slideNext(600, true);

            if (goSlide) {

                goSlide = false;

                // Очищаем от анимации
                layers.endViewLayer(`.animate__layer_${swiper.realIndex}`, `.title__h1_${swiper.realIndex}`);

                swiper.slideNext(1500, true);

                layers.startViewLayer(`.animate__layer_${swiper.realIndex}`, `.title__h1_${swiper.realIndex}`, callBack());

                function callBack() {
                    setTimeout(() => {
                        goSlide = true;
                    }, 2000)
                }
            }

        } else {
            // swiper.slidePrev(600, true);

            if (goSlide) {

                goSlide = false;

                // Очищаем от анимации
                layers.endViewLayer(`.animate__layer_${swiper.realIndex}`, `.title__h1_${swiper.realIndex}`);

                swiper.slidePrev(1500, true);

                layers.startViewLayer(`.animate__layer_${swiper.realIndex}`, `.title__h1_${swiper.realIndex}`, callBack());

                function callBack() {
                    setTimeout(() => {
                        goSlide = true;
                    }, 2000)
                }

            }

        }

    });



    // LIGHT VERSION
    // Переключение слайдеров колёсиком мышки
    // $('#header-slider').on('wheel', function (e) {

    //     //  Для кроссбраузерности
    //     var round = Math.round(e.originalEvent.deltaY);

    //     if (Math.sign(round) === 1) {

    //         swiper.slideNext(1000, true);

    //     } else {
    //         swiper.slidePrev(1000, true);
    //     }

    // });
    // SLIDER END ##############################



    // Init BG SLIDER ##############################
    $('.slider-item').each((i, item) => {
        // Инициализируем начальный экран
        initBG(item, width, height, swiper);
    });
    // Init BG SLIDER END ##########################

    // Задаём текущий год в футоре ##############################
    $('#full-year').html(new Date().getFullYear());
    // Задаём текущий год в футоре end ##########################
});


// is-active