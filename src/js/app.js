import animationOnScroll from "./animation/animationOnScroll";
import featuredProducts from "./components/featuredProducts";

const firstAnim = () => {
	document.body.style.display = 'block'
	animationOnScroll();
	featuredProducts.init();
}

document.body.style.display = 'none'
setTimeout(() => firstAnim(), 200)