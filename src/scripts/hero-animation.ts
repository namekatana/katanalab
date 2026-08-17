import { gsap, setupGsap } from './gsap-setup'

setupGsap()
gsap.defaults({ ease: 'power3.out', duration: 1 })

const cardEntrance = {
	browser: { x: -36, y: 28 },
	chat: { x: 36, y: 20 },
	phone: { x: -20, y: 40 },
} as const

function cardKey(card: HTMLElement): keyof typeof cardEntrance {
	if (card.hasAttribute('data-hero-card-browser')) return 'browser'
	if (card.hasAttribute('data-hero-card-chat')) return 'chat'
	return 'phone'
}

export function initHeroAnimation(root: HTMLElement) {
	const ctx = gsap.context(() => {
		const lines = root.querySelectorAll<HTMLElement>('[data-hero-line]')
		const subheadline = root.querySelector<HTMLElement>('[data-hero-subheadline]')
		const actions = root.querySelector<HTMLElement>('[data-hero-actions]')
		const cardNodes = Array.from(
			root.querySelectorAll<HTMLElement>('[data-hero-card]'),
		)
		const floatNodes = Array.from(
			root.querySelectorAll<HTMLElement>('[data-hero-card-float]'),
		)
		const parallaxNodes = Array.from(
			root.querySelectorAll<HTMLElement>('[data-hero-card-parallax]'),
		)
		const visual = root.querySelector<HTMLElement>('[data-hero-visual]')

		if (!lines.length) return

		const timeline = gsap.timeline({
			defaults: { ease: 'power3.out', force3D: true },
		})

		timeline.fromTo(
			lines,
			{ opacity: 0, y: 24 },
			{ opacity: 1, y: 0, duration: 1.1, stagger: 0.15 },
		)

		if (subheadline) {
			timeline.fromTo(
				subheadline,
				{ opacity: 0 },
				{ opacity: 1, duration: 1 },
				'-=0.55',
			)
		}

		if (actions) {
			timeline.fromTo(
				actions,
				{ opacity: 0 },
				{ opacity: 1, duration: 1 },
				'-=0.65',
			)
		}

		if (cardNodes.length) {
			cardNodes.forEach((card) => {
				const from = cardEntrance[cardKey(card)]
				timeline.fromTo(
					card,
					{ opacity: 0, x: from.x, y: from.y },
					{ opacity: 1, x: 0, y: 0, duration: 1.15, ease: 'expo.out' },
					'-=0.9',
				)
			})

			timeline.add(() => {
				floatNodes.forEach((node, index) => {
					gsap.to(node, {
						y: -10,
						duration: 2.5 + index * 0.4,
						repeat: -1,
						yoyo: true,
						ease: 'sine.inOut',
						delay: index * 0.25,
						force3D: true,
					})
				})
			})
		}

		if (visual && parallaxNodes.length) {
			const canParallax = window.matchMedia('(hover: hover) and (pointer: fine)').matches
			if (!canParallax) return

			const xTo = parallaxNodes.map((node) =>
				gsap.quickTo(node, 'x', { duration: 0.45, ease: 'power3.out' }),
			)
			const rotateTo = parallaxNodes.map((node) =>
				gsap.quickTo(node, 'rotation', { duration: 0.45, ease: 'power3.out' }),
			)

			visual.addEventListener('mousemove', (event) => {
				const bounds = visual.getBoundingClientRect()
				const px = (event.clientX - bounds.left) / bounds.width - 0.5
				const py = (event.clientY - bounds.top) / bounds.height - 0.5

				parallaxNodes.forEach((_, index) => {
					const depth = (index + 1) * 0.35
					xTo[index](px * 10 * depth)
					rotateTo[index](py * 1.1 * depth)
				})
			})

			visual.addEventListener('mouseleave', () => {
				xTo.forEach((tween) => tween(0))
				rotateTo.forEach((tween) => tween(0))
			})
		}
	}, root)

	return () => ctx.revert()
}
