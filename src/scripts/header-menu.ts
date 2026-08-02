const SELECTORS = {
	toggle: '#header-toggle',
	menu: '#header-mobile-menu',
	openClass: 'is-open',
} as const

export function initHeaderMenu() {
	const toggle = document.querySelector<HTMLButtonElement>(SELECTORS.toggle)
	const menu = document.querySelector<HTMLElement>(SELECTORS.menu)

	if (!toggle || !menu) return

	const setOpen = (open: boolean) => {
		toggle.setAttribute('aria-expanded', String(open))
		toggle.setAttribute('aria-label', open ? 'close menu' : 'open menu')
		menu.setAttribute('aria-hidden', String(!open))
		menu.classList.toggle(SELECTORS.openClass, open)
		toggle.classList.toggle(SELECTORS.openClass, open)
		document.documentElement.classList.toggle('menu-open', open)
		document.body.classList.toggle('menu-open', open)
	}

	toggle.addEventListener('click', () => {
		const isOpen = toggle.getAttribute('aria-expanded') === 'true'
		setOpen(!isOpen)
	})

	menu.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => setOpen(false))
	})

	window.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') setOpen(false)
	})
}
