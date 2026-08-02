import { getLenis, onSmoothScrollFrame } from './smooth-scroll'

export function initCustomScrollbar(root: HTMLElement) {
	const track = root.querySelector<HTMLElement>('[data-scrollbar-track]')
	const thumb = root.querySelector<HTMLElement>('[data-scrollbar-thumb]')
	const lenis = getLenis()

	if (!track || !thumb || !lenis) return

	let dragging = false
	let dragOffset = 0

	const getMetrics = () => {
		const scrollHeight = document.documentElement.scrollHeight
		const clientHeight = window.innerHeight
		const maxScroll = Math.max(scrollHeight - clientHeight, 0)
		const trackHeight = track.clientHeight
		const thumbHeight = Math.max((clientHeight / scrollHeight) * trackHeight, 32)
		const maxThumbTop = Math.max(trackHeight - thumbHeight, 0)

		return { maxScroll, thumbHeight, maxThumbTop }
	}

	const setThumb = (thumbTop: number, thumbHeight: number) => {
		thumb.style.height = `${Math.round(thumbHeight)}px`
		thumb.style.transform = `translate3d(-50%, ${Math.round(thumbTop)}px, 0)`
	}

	const syncThumb = (scroll: number) => {
		const { maxScroll, thumbHeight, maxThumbTop } = getMetrics()

		if (maxScroll <= 0) {
			root.dataset.visible = 'false'
			return
		}

		root.dataset.visible = 'true'
		const progress = Math.min(Math.max(scroll / maxScroll, 0), 1)
		setThumb(progress * maxThumbTop, thumbHeight)
	}

	const onFrame = () => {
		if (dragging) return
		syncThumb(lenis.scroll)
	}

	const onPointerDown = (event: PointerEvent) => {
		event.preventDefault()
		dragging = true
		thumb.setPointerCapture(event.pointerId)
		dragOffset = event.clientY - thumb.getBoundingClientRect().top
		document.documentElement.classList.add('scrollbar-dragging')
	}

	const onPointerMove = (event: PointerEvent) => {
		if (!dragging) return

		const { maxScroll, thumbHeight, maxThumbTop } = getMetrics()
		const trackRect = track.getBoundingClientRect()
		const nextTop = Math.min(
			Math.max(event.clientY - trackRect.top - dragOffset, 0),
			maxThumbTop,
		)
		const ratio = maxThumbTop > 0 ? nextTop / maxThumbTop : 0

		setThumb(nextTop, thumbHeight)
		lenis.scrollTo(ratio * maxScroll, { immediate: true, force: true })
	}

	const onPointerUp = (event: PointerEvent) => {
		if (!dragging) return
		dragging = false
		thumb.releasePointerCapture(event.pointerId)
		document.documentElement.classList.remove('scrollbar-dragging')
		syncThumb(lenis.scroll)
	}

	const onTrackPointerDown = (event: PointerEvent) => {
		if (event.target === thumb) return

		const { maxScroll, thumbHeight, maxThumbTop } = getMetrics()
		const trackRect = track.getBoundingClientRect()
		const nextTop = Math.min(
			Math.max(event.clientY - trackRect.top - thumbHeight / 2, 0),
			maxThumbTop,
		)
		const ratio = maxThumbTop > 0 ? nextTop / maxThumbTop : 0

		lenis.scrollTo(ratio * maxScroll, { duration: 1.1 })
	}

	const onResize = () => syncThumb(lenis.scroll)
	const unsubscribeFrame = onSmoothScrollFrame(onFrame)

	thumb.addEventListener('pointerdown', onPointerDown)
	window.addEventListener('pointermove', onPointerMove)
	window.addEventListener('pointerup', onPointerUp)
	window.addEventListener('pointercancel', onPointerUp)
	track.addEventListener('pointerdown', onTrackPointerDown)
	window.addEventListener('resize', onResize)

	syncThumb(lenis.scroll)

	return () => {
		unsubscribeFrame()
		thumb.removeEventListener('pointerdown', onPointerDown)
		window.removeEventListener('pointermove', onPointerMove)
		window.removeEventListener('pointerup', onPointerUp)
		window.removeEventListener('pointercancel', onPointerUp)
		track.removeEventListener('pointerdown', onTrackPointerDown)
		window.removeEventListener('resize', onResize)
		document.documentElement.classList.remove('scrollbar-dragging')
	}
}
