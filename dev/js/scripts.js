import {gsap} from "gsap";
import {iconAnimation} from "./busintro.js"
import {plainAnimation} from "./plaindash.js"

const mainTl = gsap.timeline();

mainTl.add(iconAnimation())
    .add(plainAnimation());