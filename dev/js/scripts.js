import {gsap} from "gsap";
import {iconAnimation} from "./busintro.js";
import {plainAnimation} from "./plaindash.js";
import {magicdash} from "./magicdash.js";

import {GSDevTools} from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTl = gsap.timeline();

mainTl.add(iconAnimation())
    .add(plainAnimation(), "-=8.5")
    .add(magicdash(), "-=7");

    GSDevTools.create();