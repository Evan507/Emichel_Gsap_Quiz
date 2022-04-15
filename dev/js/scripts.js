//import { gsap } from "gsap";

//Replace this value with your name
const yourName = "Evan Michel"
document.querySelector("#name").innerHTML = yourName;

//GreenSock Timeline

import { gsap } from "gsap";

const quiz = gsap.timeline();
    
quiz
.from(".graph", {duration: 2, opacity:0})
.from(".red", {duration:1, x:0, ease: "bounce.out"}, "horiz")
.from(".blue", {duration:1, x:350, ease: "bounce.out"}, "horiz")
.to(".red" ,{duration:2, y:300}, "vert")
.to(".blue", {duration:2, y:0}, "vert")
.from(".green", {duration: 3, width:50}, "horiz","vert")
.to(".red" ,{duration:0.5, delay:1, rotation:360, ease: "elastic.out"}, "vert")
.to(".blue", {duration:0.5, delay:1, rotation:360, ease: "elastic.out"}, "vert")

;
