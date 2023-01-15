import { styled } from "@stitches/react"
import { WorkData } from "../lib/data/workData"
import Layout from "../src/components/Layout"

const title = "Work Experience"
const subtitle =
	"Check out my recent work experience!"

export default function Work() {
	return (
		<Layout title="Work" description={`${title} - ${subtitle}`}>
			<Section>
				<CardGrid>
		{WorkData.map((data, i) => {
			const Logo = data.logo
			return (
				<Card key={i}>
					<Logo width={'100px'} />
				</Card>
			)
		})}
				</CardGrid>
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
	padding: '$l'
	// scrollSnapAlign: "start",
})

const CardGrid = styled("div" ,{})
const Card = styled("div" ,{})
