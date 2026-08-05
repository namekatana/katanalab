export function initContactSelect(root: HTMLElement) {
	if (root.dataset.bound === 'true') return
	root.dataset.bound = 'true'

	const input = root.querySelector<HTMLInputElement>('[data-contact-select-input]')
	const trigger = root.querySelector<HTMLButtonElement>('[data-contact-select-trigger]')
	const valueLabel = root.querySelector<HTMLElement>('[data-contact-select-value]')
	const list = root.querySelector<HTMLElement>('[data-contact-select-list]')
	const chevron = root.querySelector<HTMLElement>('[data-contact-select-chevron]')
	const options = Array.from(
		root.querySelectorAll<HTMLElement>('[data-contact-select-option]'),
	)

	if (!input || !trigger || !valueLabel || !list) return

	const placeholder = valueLabel.textContent ?? 'select a type'

	const setOpen = (open: boolean) => {
		list.classList.toggle('hidden', !open)
		trigger.setAttribute('aria-expanded', String(open))
		chevron?.classList.toggle('rotate-180', open)
		trigger.classList.toggle('border-neutral-900', open)
	}

	const selectOption = (option: HTMLElement) => {
		const value = option.dataset.value ?? ''
		const label = option.textContent?.trim() ?? value

		input.value = value
		input.setCustomValidity('')
		valueLabel.textContent = label
		valueLabel.classList.remove('text-neutral-400')
		valueLabel.classList.add('text-neutral-900')

		options.forEach((item) => {
			const selected = item === option
			item.setAttribute('aria-selected', String(selected))
			item.classList.toggle('bg-neutral-50', selected)
		})

		setOpen(false)
		trigger.focus()
	}

	const reset = () => {
		input.value = ''
		valueLabel.textContent = placeholder
		valueLabel.classList.add('text-neutral-400')
		valueLabel.classList.remove('text-neutral-900')
		options.forEach((item) => {
			item.setAttribute('aria-selected', 'false')
			item.classList.remove('bg-neutral-50')
		})
		setOpen(false)
	}

	trigger.addEventListener('click', () => {
		const isOpen = trigger.getAttribute('aria-expanded') === 'true'
		setOpen(!isOpen)
	})

	options.forEach((option) => {
		option.addEventListener('click', () => selectOption(option))
		option.addEventListener('keydown', (event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault()
				selectOption(option)
			}
		})
	})

	document.addEventListener('click', (event) => {
		if (!root.contains(event.target as Node)) {
			setOpen(false)
		}
	})

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') setOpen(false)
	})

	root.addEventListener('contact:select-reset', reset)

	return { reset }
}
