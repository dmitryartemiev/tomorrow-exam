import Swiper, {Navigation} from "swiper";

class FeaturedProducts {
	constructor(){
		this.initAll();
	}

	initAll() {
		this.sections = [...document.querySelectorAll('.featured-products')]
		this.sections.forEach(section => this.init(section))
	}
	
	init(section) {
		this.section = section;
		if(this.section){
			this.initSlider()
			this.handleProducts()
		}
	}

	initSlider() {
		let container = this.section.querySelector('.swiper');
		if(container){
			const swiper = new Swiper(container, {
				modules: [Navigation],
				slidesPerView: 'auto',
				loop: true,
				spaceBetween: 9,
				centeredSlides: true,
				breakpoints: {
					1024: {
						loop: true,
						centeredSlides: false,
						slidesPerView: 3,
						spaceBetween: 2,
						navigation: {
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						},
					},
				}
			})
			container.style.opacity = '1';
		}
	};

	handleProducts() {
		let products = [...this.section.querySelectorAll('.featured-product__card')]
		products.forEach(product => {
			product.addEventListener('click', e => {
				e.preventDefault();
				if(product.dataset.id){
					this.handleAddToCart(product)
				}
			})
		})
	}

	handleAddToCart(product) {
		console.log('Adding to cart...')
		let variantId = product.dataset.id;
		let formData = {
			items: [{
				id: variantId,
				quantity: 1,
			}]
		};
		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		}
		fetch(`${routes.cart_add_url}`, config)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
		})
		.catch((error) => {
			console.error('Error:', error);
		});
		
	}
}

const featuredProducts = new FeaturedProducts()

export default featuredProducts