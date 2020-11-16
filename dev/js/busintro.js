import {gsap} from "gsap";

const iconTL = gsap.timeline();



export function iconAnimation(){
    iconTL.to("#busintro",{duration: 13, x: -1700})

    return iconTL;
}