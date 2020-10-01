
import gsap from "gsap";

class Preloader {

    constructor() {
        this.tl = gsap.timeline();
        this.gsap = gsap;
    }

    animeYoYo(){
        this.tl.to('.preloader-icon', {
            transform: `scale(3)`,
            delay: .3,
            duration: 2,
            repeat: 10,
            yoyo: true
        })
    }
}

export default Preloader;