/*テキストアニメーション*/
gsap.utils.toArray('.js-slideIn').forEach((target)=>{
    var target = target.querySelector(':scope > .js-slideIn-element');
    gsap.to(target,{y:0,ease:"power3.out",duration:1.2,scrollTrigger:{
        trigger:target,
        start:'bottom 90%',
        toggleActions:'play none none reverse',
    }})
})
