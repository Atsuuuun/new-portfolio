gsap.to('.js-scale-change', {
    width:'100%',
    height: '200vh',
    borderRadius: 0,
    scrollTrigger: {
        trigger: '.js-sticky',
        start: 'center center',
        duration: 6,
        scrub: 1,
        pin: true
    }
});
