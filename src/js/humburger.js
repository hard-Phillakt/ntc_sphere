
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

                let countLi = 1;
                delayAnime(() => {
                    $('.sidebar-menu__list li').each((i, item) => {

                        tl.to(`.sidebar-menu ul li:nth-child(${countLi + 1})`, {
                            y: 0,
                            opacity: 1,
                            duration: .1
                        })

                        if (countLi === $('.sidebar-menu__list li').length) {

                            tl.to(`.sidebar-menu ul li:nth-child(${countLi + 1})`, {
                                y: 0,
                                opacity: 1,
                                duration: .1,
                                onComplete: () => {
                                    viewSidebarMenu = true;
                                }
                            })

                        }
                        countLi++;
                    });
                }, 1000);


            } else {

                viewSidebarMenu = false;

                $(this).removeClass('is-active');

                let countLi = 1;
                delayAnime(() => {
                    $('.sidebar-menu__list li').each((i, item) => {

                        tl.to(`.sidebar-menu ul li:nth-child(${countLi + 1})`, {
                            y: -30,
                            opacity: 0,
                            duration: .1
                        })

                        if (countLi === $('.sidebar-menu__list li').length) {

                            tl.to(`.sidebar-menu ul li:nth-child(${countLi + 1})`, {
                                y: -30,
                                opacity: 0,
                                duration: .1,
                                onComplete: () => {

                                    //  Возвращаем пункты меню в начальное состояние
                                    $('.sidebar-menu__list li').each((i, item) => {

                                        tl.to(`.sidebar-menu ul li:nth-child(${countLi - 1})`, {
                                            y: 30,
                                            opacity: 0,
                                            duration: .1
                                        });

                                    });

                                    // Закрываем sidebarMenu
                                    viewSideBar.animeHiddenBlockMenu();

                                    viewSidebarMenu = true;

                                }
                            })
                        }
                        countLi++;
                    });
                });

            }

            count++;
        }


    });

};

export default hamburger;