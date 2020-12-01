import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

const iconTL = gsap.timeline();



export function magicdash(){
    iconTL.from("#dashboardshape",{duration: 4, alpha: 0})
    iconTL.from("#level6" ,{x: 1010})
    iconTL.from("#level5" ,{x: -1100}, "<")
    iconTL.from("#dots" ,{duration: 1, alpha:0, stagger: 0.25})
    iconTL.from("#star1, #star3, #star6" ,{duration: 1, alpha:0, stagger: 0.25}, "<")
    iconTL.from("#star2, #star4, #star5" ,{duration: 1, alpha:0, stagger: 0.25})
    iconTL.from("#level2" ,{x: 1100}, "-=.5")
    iconTL.from("#level1" ,{x: -1100}, "<")
    iconTL.from("#button3" ,{duration: 2, alpha:0})
    iconTL.from("#button4" ,{duration: 2, alpha:0}, "<")
    return iconTL;
}