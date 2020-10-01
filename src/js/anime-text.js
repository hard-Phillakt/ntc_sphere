
import gsap from "gsap";


class Text {

    constructor() {
        this.tl = gsap.timeline();
        this.gsap = gsap;
    }

    // Отображаем заголовок
    animeViewText(item, realIndex) {

        this.gsap.to(item, {
            clip: `rect(80px, 1000px, 80px, 0px)`,
            x: -60,
        });

        this.gsap.to(realIndex, {
            clip: `rect(0px, 1000px, 80px, 0px)`,
            x: 0,
            delay: .9,
            duration: .3,
        });

    }

}

export default Text;