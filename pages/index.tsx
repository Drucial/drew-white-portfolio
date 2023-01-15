import { styled } from "@stitches/react"
import { useRecoilValue } from "recoil"
import Layout from "../src/components/Layout"
import { ScrollIndicator } from "../src/components/ScrollIndiciator"
import { IsMobileState } from "../state/atoms"

const title = "Hello, I'm Drew 👋"
const subtitle =
	"I'm a UI/UX Design Engineer at Stashpad, and living in Charlotte, North Carolina."

export default function About() {
	const isMobile = useRecoilValue(IsMobileState)
	return (
		<Layout title="About" description={`${title} - ${subtitle}`}>
			<Section>
				<MainHeading>
					<TopSpan>UI/UX DESIGN</TopSpan>
					<MiddleSpan mobile={isMobile} />
					<BottomSpan>ENGINEER</BottomSpan>
				</MainHeading>
			</Section>
			<Section>
				<ContentWrapper>
					<Heading>Hey, I&apos;m Drew 🖖🏻</Heading>
					<Text>
						Thanks for visting my website! You are probably curious who I am. As
						you can see from the title above, I am a{" "}
						<span>UI/UX Design Engineer</span>. I think that&apos;s a pretty
						unusual title but basically, I love to <span>design </span>
						forward thinking, thoughtful, and exciting interfaces and
						experiences for mobile, desktop and the web...and I also like to{" "}
						<span>build</span> them!
					</Text>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper>
					<Heading>Design Philosophy</Heading>
					<Text>
						I am a <span>minimalist</span> at heart and strongly believe that
						less is more in almost every situation. I love to push the boundries
						of convention while throwing familiar nods to users to take them on
						a satisfying journey. Analytics and research play a critical role in
						my approach to both UX and UI as they provide a rodemap for an{" "}
						<span>intuitive and elegant</span> feel that will invite users to
						feel right at home.
					</Text>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper>
					<Heading>Design Tools</Heading>
					<Text>
						Today, I work through my design process in <span>Figma</span>.
						Prototypes are managed in Figma or a code sandbox like CodePen if
						there is substantial interaction design. Icons and graphics are
						handled in Adobe <span>Illustrator</span> and <span>Photoshop</span>{" "}
						respectively. Finally, for any 3D work or animations I prefer to
						work in <span>Cinema4D</span> using Octane Render.
					</Text>
				</ContentWrapper>
			</Section>
			<Section>
				<ContentWrapper>
					<Heading>Engineering Tools</Heading>
					<Text>
						My primary language is JavaScript, specifically{" "}
						<span>TypeScript</span>. These days I spend most of my time in React
						working with a wide range of libraries including NextJS,{" "}
						<span>Stitches</span> for styled components, <span>Recoil </span>
						for state managment, <span>FramerMotion</span> for all the good
						animations, ReactSpring for that springy touch and...there&apos;s
						too many more but you get the idea.
					</Text>
				</ContentWrapper>
			</Section>
		</Layout>
	)
}
const Section = styled("section", {
	background: "$dark100",
	borderRadius: "$radL",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	scrollSnapAlign: "start",
	padding: "$l",
})

const MainHeading = styled("h1", {
	display: "grid",
	placeItems: "center",
	fontSize: "clamp(48px, 12vw, 10rem)",
})

const TopSpan = styled("span", {
	fontWeight: "$3",
	background: "$primaryGradient",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
})

const BottomSpan = styled("span", {
	fontWeight: "$1",
})

const MiddleSpan = styled("span", {
	width: "100%",
	marginTop: 16,
	border: `1px solid`,

	variants: {
		mobile: {
			true: {
				marginTop: 4,
			},
		},
	},
})

const ContentWrapper = styled("div", {
	maxWidth: 800,
	display: "grid",
	gap: "$xl",
})

const Heading = styled("h2", {})

const Text = styled("p", {
	"& span": {
		fontWeight: "$3",
		color: "$primary100",
	},
})
