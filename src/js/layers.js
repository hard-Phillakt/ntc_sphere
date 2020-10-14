
import gsap from "gsap";

class Layers {

    constructor() {
        this.tl = gsap.timeline();
        this.gsap = gsap;
    }

    // Показ синего фона на 50% 
    animateViewLayer(width, height, realIndex) {

        // Очищаем все фоны 
        this.gsap.to(`.animate__layer`, {
            clip: `rect(0px, 0px, ${height}px, ${width}px)`,
            duration: 1,
        });

        // Задаём анимацию активному фону
        this.gsap.to(`.animate__layer_${realIndex}`, {
            clip: `rect(0px, ${width / 2}px, ${height}px, 0px)`,
            delay: .6,
            duration: 1,
        });
    }

    // Закрытие фона
    // endViewLayer(item) {


    // }

}


export default Layers;

