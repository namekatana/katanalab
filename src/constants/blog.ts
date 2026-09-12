export type BlogBlock = string | { heading: string } | { list: string[] }

export interface BlogPost {
	slug: string
	title: string
	date: string
	readingTime: string
	summary: string
	tags: string[]
	href: string
	body: BlogBlock[]
	svg?: string
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
		{
			slug: 'static-over-spa',
			title: 'static pages beat a spa for most marketing sites',
			date: '2026-08-04',
			readingTime: '4 min',
			summary:
				'a single-page app feels modern, but for a page whose only job is to load fast and rank, plain html still wins.',
			tags: ['engineering', 'performance'],
			href: '/blog/static-over-spa',
			body: [
				'every few months a client asks why their landing page is not built the same way as a big app dashboard. the honest answer: a dashboard and a landing page are solving different problems.',
				{ heading: 'what actually loads first' },
				'a dashboard hides behind a login and stays open in one tab for hours, so the cost of shipping a heavier bundle once is small. a marketing page gets one visit, has one job, and is judged in the first second.',
				"when we swapped a client's framework-heavy homepage for a statically rendered one, the first paint dropped from close to two seconds to under half a second on a mid-range phone. nothing else about the design changed.",
				{
					list: [
						'html arrives already rendered, so there is content before javascript even runs',
						'less client-side script means less time blocked on parsing and hydration',
						'crawlers and link previews see the finished page immediately, not a loading spinner',
					],
				},
				{ heading: 'when a spa still makes sense' },
				'if the page is genuinely an application — a dashboard, an editor, something people keep open and interact with for a while — the calculus flips and a client-rendered app can be the right call.',
				'for a page whose only goal is to load, explain, and convert, we default to static rendering and add interactivity only where it earns its cost.',
			],
			svg: `<svg viewBox="0 0 340 110" role="img" aria-label="first paint comparison: static rendering finishes in under half a second, a client-rendered app takes close to two seconds" xmlns="http://www.w3.org/2000/svg">
				<text x="0" y="20" font-size="12" fill="#737373">static render</text>
				<rect x="0" y="30" width="340" height="10" rx="5" fill="#e5e5e5" />
				<rect x="0" y="30" width="62" height="10" rx="5" fill="#171717" />
				<text x="70" y="39" font-size="11" fill="#171717">0.4s</text>
				<text x="0" y="72" font-size="12" fill="#737373">client-rendered app</text>
				<rect x="0" y="82" width="340" height="10" rx="5" fill="#e5e5e5" />
				<rect x="0" y="82" width="248" height="10" rx="5" fill="#a3a3a3" />
				<text x="256" y="91" font-size="11" fill="#171717">1.8s</text>
			</svg>`,
		},
	] satisfies BlogPost[],
}
