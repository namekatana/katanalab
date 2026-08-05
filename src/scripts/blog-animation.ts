import { initScrollFade } from './scroll-fade'

export function initBlogAnimation(root: HTMLElement) {
	return initScrollFade({
		root,
		targets: '[data-blog-card]',
	})
}
