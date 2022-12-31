import { styled } from "@stitches/react"
import Layout from "../src/components/Layout"

const title = "Hello, I'm Drew 👋"
const subtitle =
	"I'm a UI/UX Design Engineer at Stashpad, and living in Charlotte, North Carolina."

export default function About() {
	return (
		<Layout title="About" description={`${title} - ${subtitle}`}>
			<Section>
				<Heading>
					<TopSpan>UI/UX DESIGN</TopSpan>
					<MiddleSpan />
					<BottomSpan>ENGINEER</BottomSpan>
				</Heading>
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
})

const Heading = styled("h1", {
	display: "grid",
	placeItems: "center",
	fontSize: "10rem",
	
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
	marginTop: "$m",
	border: `2px solid`,
})
