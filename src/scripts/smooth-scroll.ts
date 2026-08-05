import Lenis from 'lenis'
import { gsap, ScrollTrigger, setupGsap } from './gsap-setup'

setupGsap()

let lenis: Lenis | null = null
const frameListeners = new Set<(instance: Lenis) => void>()

export function getLenis() {
	return lenis
}

export function onSmoothScrollFrame(listener: (instance: Lenis) => void) {
	frameListeners.add(listener)
	return () => frameListeners.delete(listener)
}

export function initSmoothScroll() {
	if (lenis) return lenis

	lenis = new Lenis({
		lerp: 0.12,
		smoothWheel: true,
		wheelMultiplier: 0.85,
		touchMultiplier: 1.1,
		syncTouch: false,
		autoRaf: false,
	})

	lenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time) => {
		if (!lenis) return
		lenis.raf(time * 1000)
		frameListeners.forEach((listener) => listener(lenis as Lenis))
	})
	gsap.ticker.lagSmoothing(0)

	const syncMenuState = () => {
		if (!lenis) return
		if (document.documentElement.classList.contains('menu-open')) {
			lenis.stop()
		} else {
			lenis.start()
		}
	}

	const observer = new MutationObserver(syncMenuState)
	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ['class'],
	})

	return lenis
}
