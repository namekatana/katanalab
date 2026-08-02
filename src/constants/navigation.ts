export interface NavLink {
	label: string
	href: string
}

export const navLinks: NavLink[] = [
	{ label: 'projects', href: '/projects' },
	{ label: 'services', href: '/services' },
	{ label: 'blog', href: '/blog' },
	{ label: 'contact', href: '/contact' },
]

export const ctaLink = {
	label: 'get started',
	href: '/contact',
}
