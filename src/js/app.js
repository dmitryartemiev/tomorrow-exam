import animationOnScroll from "./animation/animationOnScroll";

const firstAnim = () => {
	document.body.style.display = 'block'
	animationOnScroll();
}

document.body.style.display = 'none'
setTimeout(() => firstAnim(), 200)