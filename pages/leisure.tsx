import { styled } from "@stitches/react"
import { LeisureData } from "../lib/data/leisureData"
import Layout from "../src/components/Layout"
import Image from "next/image"

const title = "Hello, I'm Drew 👋"
const subtitle =
	"I'm a UI/UX Design Engineer at Stashpad, and living in Charlotte, North Carolina."

export default function Leisure() {
	return (
		<Layout title="Leisure" description={`${title} - ${subtitle}`}>
			<Section>
				<ImageGrid>
					{LeisureData.map((item, i) => (
						<Image key={i} src={item.image} alt={item.title} width={500} height={500}/>
					))}
				</ImageGrid>
			</Section>
		</Layout>
	)
}
const Section = styled("section", {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	scrollSnapAlign: "start",
	padding: "$l",
})

const ImageGrid = styled("div", {})
