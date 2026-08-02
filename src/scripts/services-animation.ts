import { initScrollFade } from './scroll-fade'

export function initServicesAnimation(root: HTMLElement) {
	return initScrollFade({
		root,
		targets: '[data-service-card]',
	})
}
