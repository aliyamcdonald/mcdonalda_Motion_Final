import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const iconTL = gsap.timeline();



export function plainAnimation(){
    
    iconTL.to("#meter5",{scale: 1.5, transformOrigin:"50% 50%"})
    iconTL.to("#meter5",{scale: 1})
    iconTL.to("#meter6",{scale: 1.5, transformOrigin:"50% 50%"})
    iconTL.to("#meter6",{scale: 1})
    iconTL.to("#meter4",{scale: 1.5, transformOrigin:"50% 50%"})
    iconTL.to("#meter4",{scale: 1})
    iconTL.to("#level2bar2-copy-24",{speed: 13, rotate: 180, transformOrigin:"50% 50%"} )
    iconTL.to("#meter3",{scale: 1.5, transformOrigin:"50% 50%"})
    iconTL.to("#meter3",{scale: 1})
    iconTL.to("#meter1",{scale: 1.5, transformOrigin:"50% 50%"})
    iconTL.to("#meter1",{scale: 1})
    iconTL.to("#meter2",{scale: 1.5, transformOrigin:"50% 50%"})
    iconTL.to("#meter2",{scale: 1})
    iconTL.to("#meter2",{x: -170})
    iconTL.to("#meter5",{x: 1050})
    iconTL.to("#levels",{alpha: 0})
    .to("#button1base",{morphSVG: "#level3front", y: -100, fill: "#FD9DB5", stroke: "none"})
    .to("#button1base",{alpha: 0},"level3same")
    .to("#level3",{alpha: 1, visibility: "visible"},"level3same")
    .to("#button2front",{morphSVG: "#level4front", y: -100, fill: "#FD9DB5", stroke: "none"})
    .to("#button2front",{alpha: 0},"level4same")
    .to("#level4",{alpha: 1, visibility: "visible"},"level4same")
    .to("#speedometer",{alpha: 0})
    .from("#navigation",{alpha: 0},"speedometersame")
    iconTL.to("#meter1", {alpha: 0})
    iconTL.from("#button1", {alpha: 0})
    iconTL.to("#meter6", {alpha: 0})
    iconTL.from("#button2", {alpha: 0})

    

    


    // iconTL.to("#level2bar2-copy-24",{rotation:1440, ease:linear.easeNone })
    // .to("#small_pie_10", 2.5, { rotation:360, ease:Linear.easeNone }, 0 );

    
    return iconTL;
}