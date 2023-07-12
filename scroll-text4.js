CustomEase.create('scroll-text', "0.50, -0.05, 0, 1.0")
gsap.to('.wipeAnimation4', {
    clipPath: 'inset(0 0% 0 0)',
    ease: 'scroll-text',
    duration: 4.0,
    scrollTrigger: {
        trigger: '.wipeAnimation4',
        start: 'center bottom',
        toggleActions: 'play none none reverse',
    }
        
});