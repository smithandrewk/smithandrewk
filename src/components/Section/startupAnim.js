import {
    Power2,
    TimelineMax
} from 'gsap/TweenMax';

const startupAnim = () => {
    const hero = document.querySelector('.hero');
    const slider = document.querySelector('.slider');
    const logo = document.querySelector('.logo');
    const hamburger = document.querySelector('.hamburger');
    const headline = document.querySelector('.headline');

    const tl = new TimelineMax();

    tl.fromTo(hero, 2, {
            height: "0%"
        }, {
            height: "95%",
            ease: Power2.easeInOut
        })
        .fromTo(hero, 1.2, {
            width: "100%"
        }, {
            width: "90%",
            ease: Power2.easeInOut
        })
        .fromTo(slider, 1.2, {
            opacity: "0"
        }, {
            opacity: "1"
        }, "-=1.2")
        .fromTo(logo, 0.5, {
            opacity: 0,
            x: 30
        }, {
            opacity: 1,
            x: 0
        }, "-=0.5")
        .fromTo(hamburger, 0.5, {
            opacity: 0,
            x: 30
        }, {
            opacity: 1,
            x: 0
        }, "-=1")
        .fromTo(headline, 0.5, {
            opacity: 0,
            x: 30
        }, {
            opacity: 1,
            x: 0
        }, "-=1")
}

export default startupAnim;