export interface FaqItem {
	question: string
	answer: string
}

export const faqContent = {
	eyebrow: 'faq',
	heading: 'questions we hear before people say yes',
	items: [
		{
			question: 'why does it cost this much?',
			answer:
				'our prices reflect real product work — strategy, design, development, testing, and launch — not a template with a logo swap. you pay for a fixed scope, clean code, and something built to last. if a cheaper quote appears elsewhere, compare what’s actually included: revisions, performance, SEO basics, handoff, and who owns the result when something breaks.',
		},
		{
			question: 'why 50% at the start and 50% at the end?',
			answer:
				'the first 50% reserves your place in the schedule and covers discovery, setup, and early build work. the final 50% is due at launch — so we’re aligned on shipping something you’re happy with. you never pay 100% upfront, and we never disappear mid-project with full payment in hand. it’s a fair split that protects both sides.',
		},
		{
			question: 'why should we trust you?',
			answer:
				'trust comes from process, not promises. you get a written scope and fixed price before we write a line of code, milestone previews while we build, and the final payment only when the project is ready to go live. we communicate in plain language, keep decisions documented, and treat your product like something we’ll still stand behind after launch.',
		},
		{
			question: 'what if we need changes after the proposal?',
			answer:
				'small adjustments inside the agreed scope are normal. bigger feature requests get a clear change note — impact on timeline and price — so nothing “just appears” on the invoice. you always approve before we expand the work.',
		},
		{
			question: 'how long does a typical project take?',
			answer:
				'landing pages often ship in 1–2 weeks. multi-page sites usually take 3–6 weeks. web apps and bots depend on complexity — we’ll give you a realistic range in the proposal, with milestones, not a vague “it depends.”',
		},
	] satisfies FaqItem[],
}
