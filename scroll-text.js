CustomEase.create('scroll-text', "0.50, -0.05, 0, 1.0")
gsap.to('.wipeAnimation', {
    clipPath: 'inset(0 0% 0 0)',
    ease: 'scroll-text',
    duration: 3.0,
    scrollTrigger: {
        trigger: '.wipeAnimation',
        start: 'top bottom',
        toggleActions: 'play none none reverse',
    }
        
});