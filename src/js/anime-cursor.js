import $ from "jquery";
import gsap from "gsap";


class CursorAnime {

    constructor() {
        this.tl = gsap.timeline();
        this.gsap = gsap;
    }

    // Движение сферы за курсором 
    moveSphereForCursor(...param) {
        this.gsap.to(`.cursor`, {
            transform: `translate(${param[0]}px, ${param[1]}px)`,
            duration: .3,
        });
    }

    // Смена иконки курсора при зажатии клавиши
    grabbingCursor() {
        this.gsap.to(`.header`, {
            cursor: `grabbing`
        });

        this.gsap.to(`.cursor`, {
            width: `60px`,
            height: `60px`,
            top: `-15px`,
            left: `-15px`,
            duration: .3,
        })
    }

    grabCursor() {

        this.gsap.to(`.header`, {
            cursor: `grab`
        });

        this.gsap.to(`.cursor`, {
            width: `30px`,
            height: `30px`,
            top: `0`,
            left: `0`,
            duration: .1,
        })
    }

    cursorIncrease() {
        // Анимация курсора (увеличение сферы) при наведении на меню
        this.gsap.to(`.cursor`, {
            width: `60px`,
            height: `60px`,
            top: `-10px`,
            left: `-10px`,
            duration: .3,
        });
        
    }

    cursorDecrease() {
        // Анимация курсора (уменьшение сферы) при наведении на меню
        this.gsap.to(`.cursor`, {
            width: `30px`,
            height: `30px`,
            top: `0`,
            left: `0`,
            duration: .3,
        });
    }

}

export default CursorAnime;

//  Анимация при сбросе курсора с пункта меню
// $('.menu .menu__link').on('mouseout', function (e) {

//     //  Длина в px ссылки
//     let clientWidth = this.clientWidth;
//     // Узел линии
//     let fastLine = $(e.target).next();

//     tl.to(fastLine, {
//         clip: `rect(0px, ${clientWidth + 20}px, 20px, ${clientWidth + 20}px)`,
//         duration: .3,
//     });

// });