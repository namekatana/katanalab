export function formatDate(value: string) {
	return new Date(value)
		.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
		.toLowerCase()
}
