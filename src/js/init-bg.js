import $ from "jquery";
import gsap from "gsap";

const initBG = (item, width, height, swiper) => {

    // Очищаем все фоны 
    gsap.to(item, {
        clip: `rect(0px, ${width}px, ${height}px, ${width}px)`,
    });

    // Задаём анимацию активному фону
    gsap.to(`.slider-item__${swiper.realIndex}`, {
        clip: `rect(0px, ${width}px, ${height}px, 0px)`,
    });
}

export default initBG;