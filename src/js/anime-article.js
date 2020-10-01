
import gsap from "gsap";

class Article {

    constructor() {
        this.tl = gsap.timeline();
        this.gsap = gsap;
    }

    animeViewBlock(item, realIndex){

        this.gsap.to(item, {
            clip: `rect(0px, 300px, 160px, 300px)`,
            x: 100,
        });

        this.gsap.to(realIndex, {
            clip: `rect(-30px, 340px, 190px, -30px)`,
            x: 0,
            delay: .9,
            duration: .3,
        });

    }

}

export default Article;