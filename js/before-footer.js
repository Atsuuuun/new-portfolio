gsap.fromTo('.js-move-text',{x:'250%'},{x:'0%',scrollTrigger:{
    trigger:'.js-move-text',
    start:'top bottom',
    end:'center 30%',
    scrub:1.5,
}});

gsap.to('.js-move-text span',{color:'#FF6347',duration:.25,scrollTrigger:{
    trigger:'.js-move-text span',
    start:'center center',
    toggleActions:'play none none reverse'
}});


// ScrollTrigger.create({
//     trigger:'.js-move-text span',
//     start:'center center',
//     toggleClass:{targets:'.js-move-text span',className:'is-active'}
// })
