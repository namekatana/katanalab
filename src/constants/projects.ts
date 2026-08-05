export interface ProjectItem {
	slug: string
	title: string
	category: string
	year: string
	summary: string
	tags: string[]
	href: string
	image: string
	imageAlt: string
}

export const projectsContent = {
	eyebrow: 'selected work',
	heading: 'projects that shipped',
	subheading:
		'websites, bots, and custom software — a growing set of cases from the lab.',
	items: [
		{
			slug: 'northline-commerce',
			title: 'northline commerce',
			category: 'multi-page website',
			year: '2026',
			summary:
				'a clean storefront and catalog for a small retail brand — fast pages, simple cms, and a checkout flow built to convert.',
			tags: ['astro', 'tailwind', 'cms', 'seo'],
			href: '/projects/northline-commerce',
			image: '/projects/northline-commerce.webp',
			imageAlt: 'northline commerce website shown on a laptop',
		},
	] satisfies ProjectItem[],
}
