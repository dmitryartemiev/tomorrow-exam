import gsap from "gsap";

const animationOnScroll = () => {
	const elements = gsap.utils.toArray('[data-on-scroll-animation="true"]')
	
	elements.forEach(element => {
		const anim = gsap.fromTo(
			element,
			{
				autoAlpha: 0,
				y: 100,
			},
			{
				duration: 0.6,
				autoAlpha: 1,
				y: 0,
			}
		);
		ScrollTrigger.create({
			trigger: element,
			animation: anim
		})
	})
}

export default animationOnScroll 