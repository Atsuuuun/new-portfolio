var swiper = new Swiper(".swiper-container", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	preventClicks: false,
	loop: true,
	preventClicksPropagation: false,
	coverflowEffect: {
		rotate: 20,
		stretch: 0,
		depth: 350,
		modifier: 1,
		slideShadows: true
	}
});
