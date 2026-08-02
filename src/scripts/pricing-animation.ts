import { initScrollFade } from './scroll-fade'

export function initPricingAnimation(root: HTMLElement) {
	return initScrollFade({
		root,
		targets: '[data-pricing-card]',
	})
}
