gsap.fromTo('.js-move-text',{x:'250%'},{x:'0%',scrollTrigger:{
    trigger:'.js-move-text',
    start:'top bottom',
    end:'center 100%',
    scrub:1.5,
}});

gsap.to('.js-move-text span',{color:'#FF6347',duration:.15,scrollTrigger:{
    trigger:'.js-move-text span',
    start:'center 50%',
    toggleActions:'play none none reverse'
}});


// ScrollTrigger.create({
//     trigger:'.js-move-text span',
//     start:'center center',
//     toggleClass:{targets:'.js-move-text span',className:'is-active'}
// })
