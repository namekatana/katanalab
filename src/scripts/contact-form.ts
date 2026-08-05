import { initContactSelect } from './contact-select'

export function initContactForm(form: HTMLFormElement) {
	if (form.dataset.bound === 'true') return
	form.dataset.bound = 'true'

	const success = form.querySelector<HTMLElement>('[data-contact-success]')
	const select = form.querySelector<HTMLElement>('[data-contact-select]')

	if (select) initContactSelect(select)

	form.addEventListener('submit', (event) => {
		event.preventDefault()

		const selectInput = form.querySelector<HTMLInputElement>(
			'[data-contact-select-input]',
		)

		if (selectInput && !selectInput.value) {
			selectInput.setCustomValidity('please select a project type')
		} else {
			selectInput?.setCustomValidity('')
		}

		if (!form.reportValidity()) return

		const payload = new FormData(form)

		form.dispatchEvent(
			new CustomEvent('contact:submit', {
				bubbles: true,
				detail: {
					firstName: String(payload.get('firstName') ?? ''),
					lastName: String(payload.get('lastName') ?? ''),
					email: String(payload.get('email') ?? ''),
					projectType: String(payload.get('projectType') ?? ''),
					description: String(payload.get('description') ?? ''),
				},
			}),
		)

		form.reset()
		select?.dispatchEvent(new Event('contact:select-reset'))

		if (success) {
			success.hidden = false
		}
	})
}
