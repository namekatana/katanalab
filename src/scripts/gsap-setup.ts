import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let ready = false

export function setupGsap() {
	if (ready) return
	gsap.registerPlugin(ScrollTrigger)
	gsap.config({ nullTargetWarn: false })
	ready = true
}

export { gsap, ScrollTrigger }
