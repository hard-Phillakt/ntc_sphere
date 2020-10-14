
import gsap from "gsap";

class Article {

    constructor() {
        this.tl = gsap.timeline();
        this.gsap = gsap;
    }

    animeViewBlock(item, realIndex){

        this.gsap.to(item, {
            opacity: 0,
            visibility: "hidden",
            x: 150,
        });

        this.gsap.to(realIndex, {
            opacity: 1,
            visibility: "visible",
            x: 0,
            delay: .9,
            duration: .3,
        });

    }

}

export default Article;