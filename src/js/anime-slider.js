
import Swiper from 'swiper';
import $ from "jquery";
import gsap from "gsap";


class SliderAnime {

    constructor() {
        this.tl = gsap.timeline();
        this.gsap = gsap;
    }

    clearBGandSetBGactive(item, width, height, realIndex){
        // Очищаем все фоны 
        this.gsap.to(item, {
            clip: `rect(0px, ${width}px, ${height}px, ${width}px)`,
            duration: 1,
        });

        // Задаём анимацию активному фону
        this.gsap.to(`.slider-item__${realIndex}`, {
            clip: `rect(0px, ${width}px, ${height}px, 0px)`,
            duration: 1,
        });
    }
}


export default SliderAnime;

