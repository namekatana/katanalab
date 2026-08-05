import { navLinks } from './navigation'
import { blogContent } from './blog'

export const footerContent = {
	brand: 'katana lab',
	tagline: 'digital products built with a clear process — no surprises, no fluff.',
	email: 'hello@katanalab.dev',
	cta: {
		label: 'start a project',
		href: '/contact',
	},
	columns: [
		{
			title: 'explore',
			links: navLinks,
		},
		{
			title: 'blog',
			links: blogContent.items.map((item) => ({
				label: item.title,
				href: item.href,
			})),
		},
		{
			title: 'connect',
			links: [
				{ label: 'email us', href: 'mailto:hello@katanalab.dev' },
				{ label: 'telegram', href: 'https://t.me/katanalabs' },
				{ label: 'github', href: 'https://github.com/namekatana' },
			],
		},
	],
	legal: `© ${new Date().getFullYear()} katana lab. all rights reserved.`,
}
