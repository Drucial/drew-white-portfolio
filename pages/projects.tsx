import { styled } from "@stitches/react"
import Layout from "../src/components/Layout"

const title = "Hello, I'm Drew 👋"
const subtitle =
	"I'm a UI/UX Design Engineer at Stashpad, and living in Charlotte, North Carolina."

export default function Projects() {
	return (
		<Layout title="Projects" description={`${title} - ${subtitle}`}>
			<Section>
				<h1>Projects</h1>
			</Section>
		</Layout>
	)
}
const Section = styled("section", {
	background: "$dark100",
	borderRadius: "$radL",
})
