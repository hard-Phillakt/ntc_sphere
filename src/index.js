import './scss/main.scss';

// section scss
import '../src/scss/section/_header.scss';
import '../src/scss/section/_menu.scss';
import '../src/scss/section/_slider.scss';
import '../src/scss/section/_footer.scss';
import '../src/scss/section/_sidebar-menu.scss';
import '../src/scss/section/_header-second.scss';
import '../src/scss/section/_menu-second.scss';
import '../src/scss/section/_breadcrumbs.scss';
import '../src/scss/section/_content.scss';
import '../src/scss/section/_footer-second.scss';


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

    // setTimeout(() => {
    //     $('#preloader').css({
    //         opacity: 0,
    //         visibility: `hidden`
    //     })
    // }, 2000)

    // Переменная для разрешения переключения слайдера
    let goSlide = true;
    // Переменная для разрешения переключения слайдера end


    // MENU ##################################

    let viewMenuFastLine = true;
    $('.menu .menu__link, .header-second a').on('mouseover', function (e) {
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

    // MENU END ###############################

    // FOOTER ###############################
    let viewFooterFastLine = true;
    $('.footer a').on('mouseover', function (e) {
        //  Длина в px ссылки
        let clientWidth = this.clientWidth;
        // Узел линии
        let fastLine = $(e.target).next();

        if (viewFooterFastLine && fastLine) {

            viewFooterFastLine = false;

            // Анимация меню
            menuAnime.menuFastLine(e, clientWidth, fastLine)
            delayAnime(() => {
                viewFooterFastLine = true;
            }, 600);
        }

    });
    // FOOTER END ###############################

    //  Увеличение сферы при наведении на объект ###############################
    $('.menu a, .navigat-wrap__box, .footer a, .article, .swiper-pagination, .hamburger, .sidebar-menu ul li a').on('mouseover', function (e) {
        // Анимация курсора (увеличение сферы) при наведении на объект
        cursorAnime.cursorIncrease();
    });

    $('.menu a, .navigat-wrap__box, .footer a, .article, .swiper-pagination, .hamburger, .sidebar-menu ul li a').on('mouseout', function (e) {
        // Анимация курсора (уменьшение сферы) при наведении на объект
        cursorAnime.cursorDecrease();
    });
    //  Увеличение сферы при наведении на объект END ###########################


    // MOVECURSOR ##############################
    $('#app').on('mousemove', function (e) {
        let x = e.originalEvent.clientX - 15;
        let y = e.originalEvent.clientY - 15;

        if ($('#app .cursor').is('.cursor')) {
            // Движение сферы за курсором 
            cursorAnime.moveSphereForCursor(x, y);
        }
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
    delayAnime(() => { article.animeViewBlock(`.article-wrap li`, `.article__li_0`) }, 300);

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
    layers.startViewLayer(`.animate__layer_0`, `.title__0`);


    $('#header-slider').on('wheel', function (e) {


        // NEXT && PREV Slider && Gray BG
        var round = Math.round(e.originalEvent.deltaY);

        if (Math.sign(round) === 1) {

            // swiper.slideNext(600, true);

            if (goSlide) {

                goSlide = false;

                // Очищаем от анимации
                layers.endViewLayer(`.animate__layer_${swiper.realIndex}`, `.title__${swiper.realIndex}`);

                swiper.slideNext(1500, true);

                layers.startViewLayer(`.animate__layer_${swiper.realIndex}`, `.title__${swiper.realIndex}`, callBack());

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
                layers.endViewLayer(`.animate__layer_${swiper.realIndex}`, `.title__${swiper.realIndex}`);

                swiper.slidePrev(1500, true);

                layers.startViewLayer(`.animate__layer_${swiper.realIndex}`, `.title__${swiper.realIndex}`, callBack());

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




    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0dGVtcGxhdGUiLCJhIjoiY2s0M3I5ZHgzMGEzNDNucXM1cDd0dzl3cSJ9.a2wjLlxz8LzWj9nIoGsshw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-73.9751,40.7289], // starting position
        zoom: 13 // starting zoom
    });
		
    // create the popup
    var popup = new mapboxgl.Popup({ offset: 40 }).setText(
        '756 Livingston Street, Brooklyn, NY 11201'
    );

    // create DOM element for the marker
    var el = document.createElement('div');
    el.id = 'marker';
    
    // create the marker
    new mapboxgl.Marker(el)
        .setLngLat([-73.9751,40.7289])
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // disable map zoom when using scroll
    map.scrollZoom.disable();
});


// is-active