export interface BlogPost {
	slug: string
	title: string
	date: string
	readingTime: string
	summary: string
	tags: string[]
	href: string
	body: string[]
}

export const blogContent = {
	eyebrow: 'notes from the lab',
	heading: 'writing on building',
	subheading:
		'short notes on process, pricing, and shipping digital products without the fluff.',
	items: [
		{
			slug: 'fixed-price-beats-hourly',
			title: 'why fixed price beats hourly',
			date: '2026-07-12',
			readingTime: '4 min',
			summary:
				'hourly billing rewards delay. a clear scope and fixed price keep both sides honest — and projects finish.',
			tags: ['process', 'pricing'],
			href: '/blog/fixed-price-beats-hourly',
			body: [
				'hourly work sounds flexible until the invoice arrives. the longer a project drifts, the more it costs — so incentives quietly push against shipping.',
				'a fixed price flips that. we define the scope up front, write it down, and both sides know the number. if something new appears, it becomes a new decision — not a silent overrun.',
				'that is why every katana lab build starts with a written scope, a clear price, and a 50/50 payment split. less guessing. more delivery.',
			],
		},
	] satisfies BlogPost[],
}
