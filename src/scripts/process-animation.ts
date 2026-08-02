import { gsap, setupGsap } from './gsap-setup'
import { initScrollFade } from './scroll-fade'

export function initProcessAnimation(root: HTMLElement) {
	setupGsap()

	const line = root.querySelector<HTMLElement>('[data-process-line]')
	const trust = root.querySelector<HTMLElement>('[data-process-trust]')
	const cleanups: Array<() => void> = []

	const ctx = gsap.context(() => {
		if (line) {
			gsap.set(line, { scaleX: 0, transformOrigin: 'left center' })
			gsap.to(line, {
				scaleX: 1,
				duration: 1.2,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: root,
					start: 'top 75%',
					once: true,
				},
			})
		}
	}, root)

	cleanups.push(ctx.revert.bind(ctx))
	cleanups.push(
		initScrollFade({
			root,
			targets: '[data-process-step]',
		}),
	)

	if (trust) {
		cleanups.push(
			initScrollFade({
				root,
				targets: '[data-process-trust]',
				y: 20,
				stagger: 0,
				trigger: trust,
				start: 'top 85%',
			}),
		)
	}

	return () => {
		cleanups.forEach((cleanup) => cleanup())
	}
}
