import {gsap} from "gsap";
import {iconAnimation} from "./busintro.js"
import {plainAnimation} from "./plaindash.js"
import {magicdash} from "./magicdash.js"

const mainTl = gsap.timeline();

mainTl.add(iconAnimation())
    .add(plainAnimation())
    .add(magicdash());