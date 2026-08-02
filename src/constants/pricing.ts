export type PricingIcon = 'browser' | 'layers' | 'dashboard' | 'chat'

export interface PricingItem {
	title: string
	priceUsd: string
	priceUah: string
	description: string
	href: string
	features: string[]
	icon: PricingIcon
	featured?: boolean
}

export const pricingContent = {
	eyebrow: 'pricing',
	heading: 'simple pricing, tailored to your project',
	disclaimer:
		'final price depends on project scope and requirements — get a free estimate for your specific idea',
	items: [
		{
			title: 'landing page',
			priceUsd: '$250',
			priceUah: '≈ 10,500 ₴',
			description: 'a single-page site — clean, fast, built to convert',
			href: '/contact',
			icon: 'browser',
			features: ['1 page, fully responsive', 'contact form', 'basic SEO setup'],
		},
		{
			title: 'multi-page website',
			priceUsd: '$600',
			priceUah: '≈ 25,000 ₴',
			description: 'full website with CMS, blog, and custom pages',
			href: '/contact',
			icon: 'layers',
			featured: true,
			features: ['up to 7 pages', 'blog/CMS included', 'SEO optimized'],
		},
		{
			title: 'web app / dashboard',
			priceUsd: '$1,500',
			priceUah: '≈ 63,000 ₴',
			description: 'custom admin panel, user accounts, database-driven',
			href: '/contact',
			icon: 'dashboard',
			features: [
				'custom admin panel',
				'user authentication',
				'database integration',
			],
		},
		{
			title: 'telegram bot',
			priceUsd: '$150',
			priceUah: '≈ 6,300 ₴',
			description: 'automation, commands, and integrations for your business',
			href: '/contact',
			icon: 'chat',
			features: [
				'custom commands',
				'payment integration option',
				'24/7 automation',
			],
		},
	] satisfies PricingItem[],
}
