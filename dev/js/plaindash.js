import {gsap} from "gsap";

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
    

    


    // iconTL.to("#level2bar2-copy-24",{rotation:1440, ease:linear.easeNone })
    // .to("#small_pie_10", 2.5, { rotation:360, ease:Linear.easeNone }, 0 );

    
    return iconTL;
}