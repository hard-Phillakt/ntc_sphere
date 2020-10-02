
import gsap from "gsap";

class Layers {

    constructor() {
        this.tl = gsap.timeline();
        this.gsap = gsap;
    }

    // Показ синего фона на 50% 
    startViewLayer(item, title) {

        this.gsap.to(item, {
            x: `-50%`,
            duration: .6,
            delay: .6
        })

    }

    // Закрытие фона
    endViewLayer(item) {

        this.tl.to(item, {
            x: `0%`,
            duration: .2,
        }).to(item, {
            x: `-100%`,
            delay: .3
        })
    }

}


export default Layers;

