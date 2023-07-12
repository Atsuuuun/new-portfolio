let textEffectTrigger = document.querySelectorAll('.js-text-effect-trigger');//ターゲットとなる要素を全取得
let textEffectTL = gsap.timeline();
        
textEffectTrigger.forEach((trigger)=>{
    let textEffectTL = gsap.timeline();
    let target = trigger.querySelectorAll('.js-text-effect');
    textEffectTL
    .to(target,{autoAlpha:1,y:0,duration:.4,stagger:.1})
    .to(target,{'--translateX':'101%',duration:1.0,stagger:.1})
    ScrollTrigger.create({
        trigger:trigger,
        start:'center bottom',
        animation:textEffectTL,
        toggleActions: 'play none none reverse',
    })
})