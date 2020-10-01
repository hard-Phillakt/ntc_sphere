
import $ from "jquery";
import gsap from "gsap";
import sideBarMenu from '../js/anime-sidebar-menu';
import Text from '../js/anime-text';
import delayAnime from '../js/time';

const viewSideBar = new sideBarMenu();
const animeText = new Text();
const tl = gsap.timeline();

let count = 1;
let viewSidebarMenu = true;
const hamburger = () => {

    $('.hamburger').on('click', function () {

        if (viewSidebarMenu) {

            if (count % 2) {

                viewSidebarMenu = false;

                $(this).addClass('is-active');

                // Показываем sidebarMenu
                viewSideBar.animeViewBlockMenu();

                delayAnime(() => {

                    tl.to('.sidebar-menu ul li:nth-child(1)', {
                        y: 0,
                        opacity: 1,
                        duration: .1
                    }).to('.sidebar-menu ul li:nth-child(2)', {
                        y: 0,
                        opacity: 1,
                        duration: .1
                    }).to('.sidebar-menu ul li:nth-child(3)', {
                        y: 0,
                        opacity: 1,
                        duration: .1
                    }).to('.sidebar-menu ul li:nth-child(4)', {
                        y: 0,
                        opacity: 1,
                        duration: .1
                    }).to('.sidebar-menu ul li:nth-child(5)', {
                        y: 0,
                        opacity: 1,
                        duration: .1,
                        onComplete: () => {
                            viewSidebarMenu = true;
                        }
                    })

                }, 1000);


            } else {
                
                viewSidebarMenu = false;

                $(this).removeClass('is-active');

                tl.to('.sidebar-menu ul li:nth-child(1)', {
                    y: -30,
                    opacity: 0,
                    duration: .1
                }).to('.sidebar-menu ul li:nth-child(2)', {
                    y: -30,
                    opacity: 0,
                    duration: .1
                }).to('.sidebar-menu ul li:nth-child(3)', {
                    y: -30,
                    opacity: 0,
                    duration: .1
                }).to('.sidebar-menu ul li:nth-child(4)', {
                    y: -30,
                    opacity: 0,
                    duration: .1
                }).to('.sidebar-menu ul li:nth-child(5)', {
                    y: -30,
                    opacity: 0,
                    duration: .1,
                    onComplete: () => {

                        // Закрываем sidebarMenu
                        viewSideBar.animeHiddenBlockMenu();

                        //  Через секунду возвращаем элементы в начальное состояние
                        delayAnime(() => {

                            tl.to('.sidebar-menu ul li:nth-child(1)', {
                                y: 30,
                                opacity: 0,
                                duration: .1
                            }).to('.sidebar-menu ul li:nth-child(2)', {
                                y: 30,
                                opacity: 0,
                                duration: .1
                            }).to('.sidebar-menu ul li:nth-child(3)', {
                                y: 30,
                                opacity: 0,
                                duration: .1
                            }).to('.sidebar-menu ul li:nth-child(4)', {
                                y: 30,
                                opacity: 0,
                                duration: .1
                            }).to('.sidebar-menu ul li:nth-child(5)', {
                                y: 30,
                                opacity: 0,
                                duration: .1
                            })

                        }, 1000);

                        viewSidebarMenu = true;
                    }
                })

            }
            
            count++;
        }
        

    });

};

export default hamburger;