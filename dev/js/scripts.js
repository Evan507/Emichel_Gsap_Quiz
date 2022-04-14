//import { gsap } from "gsap";

//Replace this value with your name
const yourName = "Evan Michel"
document.querySelector("#name").innerHTML = yourName;

//GreenSock Timeline

import { gsap } from "gsap";

const quiz = gsap.timeline();
    
quiz.from(".red", {duration:1, x:0}, "horiz")
.from(".blue", {duration:1, x:350}, "horiz")
.to(".red" ,{duration:1, y:300}, "vert")
.to(".blue", {duration:1, y:0}, "vert")

;
