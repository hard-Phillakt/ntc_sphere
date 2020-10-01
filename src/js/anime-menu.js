import $ from "jquery";
import gsap from "gsap";


class MenuAnime {

    constructor() {
        this.tl = gsap.timeline();
        this.gsap = gsap;
    }

    menuFastLine(...param) {

        // Анимация оранжевой линии
        // this.tl.to(param[2], {
        //     clip: `rect(0px, 0px, 20px, 0px)`,
        // }).to(param[2], {
        //     clip: `rect(0px, ${param[1] + 20}px, 20px, 0px)`,
        //     duration: .3,
        // }).to(param[2], {
        //     clip: `rect(0px, ${param[1] + 20}px, 20px, ${param[1] + 20}px)`,
        //     duration: .3,
        // });

        this.gsap.to(param[2], {
            clip: `rect(0px, 0px, 20px, 0px)`,
            duration: .3,
        })

        this.gsap.to(param[2], {
            clip: `rect(0px, ${param[1] + 20}px, 20px, 0px)`,
            delay: .2,
            duration: .3,
        })

        this.gsap.to(param[2], {
            clip: `rect(0px, ${param[1] + 20}px, 20px, ${param[1] + 20}px)`,
            delay: .4,
            duration: .3,
        })

    }

    menuACursorIncrease() {
        // Анимация курсора (увеличение сферы) при наведении на меню
        gsap.to(`.cursor`, {
            width: `60px`,
            height: `60px`,
            top: `-10px`,
            left: `-10px`,
            duration: .3,
        });
    }

    menuACursorDecrease() {
        // Анимация курсора (уменьшение сферы) при наведении на меню
        gsap.to(`.cursor`, {
            width: `30px`,
            height: `30px`,
            top: `0`,
            left: `0`,
            duration: .3,
        });
    }

}

export default MenuAnime;
