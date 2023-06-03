let text = document.querySelector('.percentage');

gsap.fromTo('circle', {
    strokeDasharray: '0, 905'
},{
    strokeDasharray: '905, 905',
        scrollTrigger: {
            trigger: '.container-percentageCircle',
            start: 'center center',
            scrub: 1,
            pin: true,
            onUpdate:(self)=> {
                num = self.progress.toLocaleString(undefined,{
                    maximunFractionDigits: 3})*100;
                    text.innerHTML = Math.ceil(num)
            }
        }
});

gsap.registerPlugin(ScrollTrigger);
gsap.to('.scroll-indicator', {
	value: 100, // 最大値
	ease: 'none', // イージング
	scrollTrigger: {
		scrub: 0.3 // 追いつくまでの時間
	}
});