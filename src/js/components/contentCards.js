import Swiper, {FreeMode, Navigation} from "swiper";

let containers = document.querySelectorAll('.swiper.content-cards__wrapper')
containers.forEach((container, index) => {
	const swiper = new Swiper(container, {
		modules: [FreeMode, Navigation],
		slidesPerView: 'auto',
		spaceBetween: 10,
		freeMode: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		
	})
	container.style.opacity = '1';
})

