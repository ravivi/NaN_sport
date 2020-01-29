const foot = document.querySelector(".foot");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(foot,1,{ height: "0%"}, { height: "110%",ease: Power2.easeInOut })
.fromTo(foot,1.2,{ width: "100%"}, { width: "80%",ease: Power2.easeInOut })
.fromTo(slider,1.2,{ x: "-100%"}, { x: "0%",ease: Power2.easeInOut },"-=1.2")
.fromTo(logo,0.5,{ opacity: 0,x: 30}, { opacity: 1,x: 1,x: 0 } , "-=0.5")
.fromTo(hamburger,0.5,{ opacity: 0,x: 30}, { opacity: 1,x: 1,x: 0 } , "-=0.5")
.fromTo(headline,0.5,{ opacity: 0,x: 30}, { opacity: 1,x: 1,x: 0 } , "-=0.5");



