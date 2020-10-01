
import gsap from "gsap";

class SideBarMenu {

    constructor() {
        this.tl = gsap.timeline();
        this.gsap = gsap;
    }

    animeViewBlockMenu(){
        this.tl.to('.sidebar-menu', {
            // clip: `rect(0, 100vw, 100vh, 0vw)`,
            opacity: 1,
            visibility: 'visible',
            delay: .3,
            duration: .3
        });
    }

    animeHiddenBlockMenu(){
        this.tl.to('.sidebar-menu', {
            // clip: `rect(0, 50vw, 100vh, 50vw)`,
            opacity: 0,
            delay: .3,
            duration: .3
        }).to('.sidebar-menu',{
            visibility: 'hidden',
        })
    }

}

export default SideBarMenu;