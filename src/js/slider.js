// import Swiper JS
import Swiper from 'swiper';

// import Swiper styles
import $ from "jquery";


import Layers from './gsap';


var swiper = new Swiper('#header-slider', {
    direction: 'vertical',
    loop: true,
    // delay: 3000,
    speed: 600,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


const layersGsap = new Layers();



swiper.on('slideChange', function () {


    // layersGsap.startViewLayer($('.animate__layer_1').eq(swiper.realIndex));


});




let goSlide = true;

$(document).ready(function () {

    // Инициализируем начальный слайд
    layersGsap.startViewLayer(`.animate__layer_0`,`.title__h1_0`);

    $('#header-slider').on('wheel', function (e) {

        var round = Math.round(e.originalEvent.deltaY);

        if (Math.sign(round) === 1) {

            if (goSlide) {

                goSlide = false;

                // Очищаем от анимации
                layersGsap.endViewLayer(`.animate__layer_${swiper.realIndex}`, `.title__h1_${swiper.realIndex}`);

                swiper.slideNext(600, true);

                layersGsap.startViewLayer(`.animate__layer_${swiper.realIndex}`,`.title__h1_${swiper.realIndex}` , callBack());

                function callBack() {
                    setTimeout(() => {
                        goSlide = true;
                    }, 1000)
                }


            }

        } else {

            if (goSlide) {

                goSlide = false;

                // Очищаем от анимации
                layersGsap.endViewLayer(`.animate__layer_${swiper.realIndex}`, `.title__h1_${swiper.realIndex}`);

                swiper.slidePrev(600, true);

                layersGsap.startViewLayer(`.animate__layer_${swiper.realIndex}`, `.title__h1_${swiper.realIndex}`, callBack());

                function callBack() {
                    setTimeout(() => {
                        goSlide = true;
                    }, 1000)
                }

            }

        }

    })

})



