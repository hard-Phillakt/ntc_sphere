// import Swiper JS
import Swiper from 'swiper';

// import Swiper styles
import $ from "jquery";


import Layers from './gsap';


var swiper = new Swiper('#header-slider', {
    direction: 'vertical',
    loop: true,
    delay: 3000,
    // speed: 300,
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

    $('#header-slider').on('wheel', function (e) {
    
        var round = Math.round(e.originalEvent.deltaY);

        if (Math.sign(round) === 1) {
            
            if(goSlide){

                layersGsap.endViewLayer();
                
                goSlide = false;

                swiper.slideNext(1000, true);

                layersGsap.startViewLayer(`.animate__layer_${swiper.realIndex}`);
    
                setTimeout(() => {
                    goSlide = 1;
                }, 3000)
            }

        } else {


            if(goSlide){

                layersGsap.endViewLayer();
                
                goSlide = false;

                swiper.slidePrev(1000, true);

                layersGsap.startViewLayer(`.animate__layer_${swiper.realIndex}`);
    
                setTimeout(() => {
                    goSlide = 1;
                }, 3000)
            }

        }

    })
    
})



