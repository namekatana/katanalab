export function initFaq(root: HTMLElement) {
	const items = root.querySelectorAll<HTMLElement>('[data-faq-item]')

	items.forEach((item) => {
		const trigger = item.querySelector<HTMLButtonElement>('[data-faq-trigger]')
		const panel = item.querySelector<HTMLElement>('[data-faq-panel]')

		if (!trigger || !panel) return

		trigger.addEventListener('click', () => {
			const isOpen = trigger.getAttribute('aria-expanded') === 'true'

			items.forEach((other) => {
				const otherTrigger = other.querySelector<HTMLButtonElement>('[data-faq-trigger]')
				const otherPanel = other.querySelector<HTMLElement>('[data-faq-panel]')
				if (!otherTrigger || !otherPanel) return
				otherTrigger.setAttribute('aria-expanded', 'false')
				otherPanel.classList.remove('is-open')
				other.classList.remove('is-open')
			})

			if (!isOpen) {
				trigger.setAttribute('aria-expanded', 'true')
				panel.classList.add('is-open')
				item.classList.add('is-open')
			}
		})
	})
}
