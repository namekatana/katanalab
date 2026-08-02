import { gsap, setupGsap } from './gsap-setup'

interface ScrollFadeOptions {
	root: HTMLElement
	targets: string
	y?: number
	duration?: number
	stagger?: number
	start?: string
	trigger?: HTMLElement | string
}

export function initScrollFade({
	root,
	targets,
	y = 30,
	duration = 0.8,
	stagger = 0.15,
	start = 'top 75%',
	trigger = root,
}: ScrollFadeOptions) {
	setupGsap()

	const elements = root.querySelectorAll<HTMLElement>(targets)
	if (!elements.length) return () => {}

	const ctx = gsap.context(() => {
		gsap.fromTo(
			elements,
			{ opacity: 0, y },
			{
				opacity: 1,
				y: 0,
				duration,
				stagger,
				ease: 'power3.out',
				force3D: true,
				scrollTrigger: {
					trigger,
					start,
					once: true,
				},
			},
		)
	}, root)

	return () => ctx.revert()
}
