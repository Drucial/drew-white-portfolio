import { StashpadApp } from "../../src/components/stashpad/StashpadApp"

export const ProjectData = [
	{
		title: "Stashpad",
		subtitle: "A new way to take notes",
		description: [
			"Designed as a part of my current employment at Stashpad, this new UI and UX has been my passion project since 2022 and represents my day to day work. The design is based off of a minimal approach to navigation, data consumption and capture as a priority.",
			"Designed for desktop using Figma, React, Recoil, Stitches, Electron.",
		],
		website: false,
		app: StashpadApp,
		link: "",
		repo: "",
	},
	{
		title: "Stashpad.com [Concept]",
		subtitle: "A design & engineering exploration",
		description: [
			"This website was designed and built as a creative experiment with the intention of pushing the brand and exploring the opportunity to design with no spec or data goals in mind. A purely creative exercise. This was also an opprtunity for me to sharpen my engineering skills, think outside of the box and experiement with the ideas that never fit anywhere else.",
			"Built for the web using NextJS, Typescript, Stitches, Recoil, FramerMotion, Sanity.io.",
		],
		website: true,
		app: null,
		link: "https://sp-website-concept.netlify.app/",
		repo: "https://github.com/Drucial/sp-website2.0",
	},
	{
		title: "Better Neumorphism",
		subtitle: "A css generator design tool",
		description: [
			"I built this app because I was disatisfied with the results from existing generators out there. Using HSL as opposed to RGBa, gives much more nuanced control over the look of the shadows that creat the affect. In addition, I wanted to be able to control the softness of the edges of components and no other generator had this functionality.",
			"Built for the web using HTML, CSS, and JavaScript.",
		],
		website: true,
		app: null,
		link: "https://www.betterneumorphism.com",
		repo: "https://github.com/Drucial/Better-Neumorphism",
	},
	{
		title: "Listrr",
		subtitle: "An authenticated list sharing application",
		description: [
			"This app was built primarliy for the purposes of education. I wanted to build a full stack app that had some useable functionality for me personally and Listrr accomplished exactly that. I can sync lists with a friend and collaborate in real time. I can also email a list directly to someone not using the app.",
			"Built for the web using React, React Spring, Auth0, MongoDB Atlas, and Sass",
		],
		website: true,
		app: null,
		link: "https://www.listrr.app",
		repo: "https://github.com/Drucial/listrr-app",
	},
	{
		title: "Drucial.com",
		subtitle: "My journal & first React project",
		description: [
			"My own personal journal, even if it is slightly out of date, and my first react app. This was another educational experience for me as a self taught engineer. It serves as a place for me to share my thoughts with the world...when I actually have time to publish something.",
			"Built for the web using React, React Spring, Sanity CMS, and Sass.",
		],
		website: true,
		app: null,
		link: "https://www.drucial.com",
		repo: "https://github.com/Drucial/drucial-dot-com",
	},
]
