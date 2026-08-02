export type ServiceIcon = 'code' | 'chat' | 'phone'

export interface ServiceItem {
	number: string
	title: string
	description: string
	href: string
	features: string[]
	icon: ServiceIcon
}

export const servicesContent = {
	eyebrow: 'what we do',
	heading: 'services built around your goals',
	items: [
		{
			number: '01',
			title: 'web development',
			description:
				'custom websites and web apps — fast, responsive, built to convert',
			href: '/services',
			icon: 'code',
			features: ['responsive design', 'fast performance', 'SEO ready'],
		},
		{
			number: '02',
			title: 'telegram bots',
			description:
				'automation, customer support, and business logic — all inside telegram',
			href: '/services',
			icon: 'chat',
			features: ['custom automation', 'payment integration', '24/7 uptime'],
		},
		{
			number: '03',
			title: 'custom software',
			description:
				'mobile apps, internal tools, and solutions tailored to what your business needs',
			href: '/services',
			icon: 'phone',
			features: [
				'scalable architecture',
				'database driven',
				'ongoing support',
			],
		},
	] satisfies ServiceItem[],
}
