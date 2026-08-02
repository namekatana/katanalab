export interface ProcessStep {
	number: string
	title: string
	description: string
	outcome: string
}

export const processContent = {
	eyebrow: 'how we work',
	heading: 'a simple process, no surprises',
	subheading:
		'every project follows the same path — clear scope, fixed price, and updates you can actually track. no vague timelines, no hidden extras.',
	trustPoints: [
		'fixed price before any build starts',
		'50% to begin, 50% on delivery',
		'written scope you both agree on',
	],
	steps: [
		{
			number: '01',
			title: 'discovery call',
			description:
				'we talk through your idea, goals, and budget — free, honest, and with no pressure to commit.',
			outcome: 'you leave with clarity on fit, timeline, and rough investment',
		},
		{
			number: '02',
			title: 'proposal & plan',
			description:
				'you receive a written scope, milestones, and a fixed price. nothing moves forward until you approve it.',
			outcome: 'signed plan + 50% deposit to reserve the start date',
		},
		{
			number: '03',
			title: 'design & build',
			description:
				'we design and develop in focused sprints, with regular check-ins so you always know what shipped and what’s next.',
			outcome: 'working previews at each milestone — no radio silence',
		},
		{
			number: '04',
			title: 'launch & support',
			description:
				'we launch together, hand over access and docs, then collect the final 50%. support stays available after go-live.',
			outcome: 'live project + final payment only when you’re ready to ship',
		},
	] satisfies ProcessStep[],
}
