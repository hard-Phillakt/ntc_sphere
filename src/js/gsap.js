
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

        this.gsap.to(title, {
            duration: .6,
            opacity: 1,
            delay: .6,
            x: `-2%`,
            // zIndex: 1,
            '-webkit-text-stroke': `2px #ffffff`,
            color: 'transparent'
        })
    }

    endViewLayer(item, title) {

        this.gsap.to(title, {
            x: `-29%`,
            opacity: 0,
            '-webkit-text-stroke': `0px transparent`,
        }) 

        // Закрытие фона
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

