import { HyakLogo } from './../../src/svg/HyakLogo'
import { DunstoneLogo } from './../../src/svg/DunstoneLogo'
import { StashpadLogo } from "../../src/svg/StashpadLogo"

export const WorkData = [
	{
		company: "Stashpad",
		title: "UI/UX Designer",
		startDate: "March 2022",
		endDate: "",
		current: true,
		location: "Durham, NC",
		highlights: [
			"Developed new visual design concepts and modified concepts based on stakeholder feedback and user analytics.",
			"Determined design requirements and analyzed user feedback to improve design quality.",
			"Developed and documented style guidelines for desktop and mobile app.",
			"Developed system interaction and sequence diagrams.",
			"Developed interactive onboarding for new users.",
			"Implemented final designs in desktop app.",
		],
		logo: StashpadLogo,
	},
	{
		company: "Hyak",
		title: "Founder",
		startDate: "June 2020",
		endDate: "September 2021",
		current: false,
		location: "Charlotte, NC",
		highlights: [
			"Founded digital agency to provide industrial clients with web design, product design, and brand strategy.",
			"Developed brands and assets for leading companies in the aerospace, energy and textiles industries.",
			"Acquired September 2021 by Ngage Content of Cleveland, Ohio.",
		],
		logo: HyakLogo,
	},
	{
		company: "Dunstone",
		title: "Marketing Director / Product Development",
		startDate: "February 2011",
		endDate: "June 2020",
		current: false,
		location: "Charlotte, NC",
		highlights: [
			"Developed and maintained brand assets and strategy.",
			"Developed and executed go-to-market strategies for all new product development.",
			"Managed group of contractors over seeing, advertising, SEO, promotions, and in person events.",
			"Worked with engineering team and sales team to develop new products for the aerospace, advanced composites,automotive, and energy industries.",
		],
		logo: DunstoneLogo,
	},
]
