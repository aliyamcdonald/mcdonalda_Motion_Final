import {gsap} from "gsap";

const iconTL = gsap.timeline();



export function magicdash(){
    iconTL.from("#dashboardshape",{duration: 4, x: -1025})
    iconTL.from("#level6" ,{duration: 2, x: 1100})
    iconTL.from("#level5" ,{duration: 2, x: -1100})
    iconTL.from("#dots" ,{duration: 1, alpha:0, stagger: 0.25})
    iconTL.from("#star1" ,{duration: 1, alpha:0, stagger: 0.25})
    iconTL.from("#star2" ,{duration: 1, alpha:0, stagger: 0.25})
    iconTL.from("#star3" ,{duration: 1, alpha:0, stagger: 0.25})
    iconTL.from("#star4" ,{duration: 1, alpha:0, stagger: 0.25})
    iconTL.from("#star5" ,{duration: 1, alpha:0, stagger: 0.25})
    iconTL.from("#star6" ,{duration: 1, alpha:0, stagger: 0.25})
    iconTL.from("#level2" ,{duration: 1, x: -1100})
    iconTL.from("#level1" ,{duration: 1, x: 1100})
    iconTL.from("#button3" ,{duration: 2, alpha:0, stagger: 0.25})
    iconTL.from("#button4" ,{duration: 2, alpha:0, stagger: 0.25})
    iconTL.to("#meter1", {duration:2, morphSVG:"#button1"})
    return iconTL;
}