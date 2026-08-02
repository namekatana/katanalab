import { initScrollFade } from './scroll-fade'

export function initFaqAnimation(root: HTMLElement) {
	return initScrollFade({
		root,
		targets: '[data-faq-item]',
		y: 24,
		duration: 0.75,
		stagger: 0.1,
	})
}
