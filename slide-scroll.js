let pages = document.querySelectorAll('.panel').length;
let moveX = -100 + (100 / pages)

gsap.to('.panels-wrap',{xPercent:moveX,ease:'none',scrollTrigger:{
    trigger:'.panels-wrap',
    start:'top top',
    end:'bottom -300%',
    pin:true,
    scrub:1,
}})