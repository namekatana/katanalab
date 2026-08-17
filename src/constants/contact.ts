export interface ProjectTypeOption {
	value: string
	label: string
}

export const contactContent = {
	eyebrow: 'get in touch',
	heading: 'leave a request',
	subheading:
		'our telegram bot is currently in development. for now, message @katanalabs directly.',
	telegram: {
		handle: '@katanalabs',
		href: 'https://t.me/katanalabs',
		note: 'bot in development — write to us here for now.',
	},
	location: {
		label: 'location',
		value: 'kyiv, ukraine',
	},
	email: {
		label: 'email',
		value: 'hello@katanalab.dev',
		href: 'mailto:hello@katanalab.dev',
	},
	form: {
		firstName: 'first name',
		lastName: 'last name',
		email: 'email',
		projectType: 'project type',
		description: 'describe your project',
		descriptionPlaceholder:
			'what you need, your idea, goals, timeline — anything that helps us understand the build.',
		submit: 'submit request',
		success: 'request received. we will get back to you soon.',
	},
	projectTypes: [
		{ value: 'website', label: 'website' },
		{ value: 'telegram-bot', label: 'telegram bot' },
		{ value: 'seo-analytics', label: 'seo and analytics' },
		{ value: 'other', label: 'other' },
	] satisfies ProjectTypeOption[],
}
