// import Swiper JS
import Swiper from 'swiper';

// import Swiper styles
import $ from "jquery";

var swiper = new Swiper('#header-slider', {
    direction: 'vertical',
    loop: true,
    speed: 600,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

swiper.on('slideChange', function () {

});



$(document).ready(function () {

    $('#header-slider').on('wheel', function (e) {

        var round = Math.round(e.originalEvent.deltaY);

        if (round == 100) {
            swiper.slideNext(600, true);
        } else {
            swiper.slidePrev(600, true);
        }
    })

})
