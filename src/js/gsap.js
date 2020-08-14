
import gsap from "gsap";

class Layers {

    constructor() {
        this.tl = gsap.timeline();
        this.gsap = gsap;
    }

    removeTween() {
        this.tl.remove(myTween);
    }

    // Показ синего фона на 50% 
    startViewLayer(item) {

        // console.log(arg);

        this.gsap.to(item, {
            x: `-50%`,
            duration: .6,
            // ease: "elastic",
            delay: 1,
        })

    }

    endViewLayer() {

        // Закрытие фона
        this.gsap.to(".animate__layer_0", {
            x: `-100%`,
        })

        this.gsap.to(".animate__layer_1", {
            x: `-100%`,
        })

        this.gsap.to(".animate__layer_2", {
            x: `-100%`,
        })
    }

}


export default Layers;






// tl.to(".animate__layer_1", {
//     x: `0%`,
//     duration: 1,
//     delay: 1
// }).to(".animate__layer_1", {
//     x: `100%`,
//     duration: 1,
//     delay: 1
// }).to(".animate__layer_1", {
//     x: `-100%`,
//     zIndex: 0

// }).to(".animate__layer_1", {
//     zIndex: 1
// })


    //  Закрытие фона
    // tl.to(".animate__layer_1", {
    //     x: `100%`,
    //     duration: .6,
    //     delay: 1
    // }).to(".animate__layer_1", {
    //     x: `-100%`,
    //     width: 0
    // }).to(".animate__layer_1", {
    //     x: `-100%`,
    //     background: '#00376D',
    //     width: '100%'
    // })