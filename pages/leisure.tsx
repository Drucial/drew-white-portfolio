import { styled } from "@stitches/react"
import Layout from "../src/components/Layout"

const title = "Hello, I'm Drew 👋"
const subtitle =
	"I'm a UI/UX Design Engineer at Stashpad, and living in Charlotte, North Carolina."

export default function Leisure() {
	return (
		<Layout title="Leisure" description={`${title} - ${subtitle}`}>
			<Section>
				<h1>Leisure</h1>
			</Section>
		</Layout>
	)
}
const Section = styled("section", {
	background: "$dark100",
	borderRadius: "$radL",
})
