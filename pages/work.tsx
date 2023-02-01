import { styled } from "@stitches/react"
import Link from "next/link"
import { useRecoilValue } from "recoil"
import { WorkData } from "../lib/data/workData"
import Layout from "../src/components/Layout"
import { PageHeader } from "../src/components/PageHeader"
import { IsMobileState } from "../state/atoms"

const title = "Work Experience"
const subtitle = "Check out my recent work experience!"
const description = (
	<>
		I am a forward thinking, ambitious, and thoughtful designer that loves
		working with like minded teammates to create nothing short of{" "}
		<span>premium experiences and interfaces</span> for users. With a background
		designing in many mediums, I have found a satisfying niche in the digital
		domain. Thinking out of the box and pushing the envelope of what can be done
		and using analytics to steer core philosophies have driven me throughout my
		career. I&apos;m also not afraid and even relish the opportunity to roll up
		my sleeves, <span>dive into the code and implement designs</span> I or
		others have worked on.
	</>
)

export default function Work() {
	const isMobile = useRecoilValue(IsMobileState)
	return (
		<Layout title="Work" description={`${title} - ${subtitle}`}>
			<PageHeader title={title} description={description} />
			<Section>
				<CardGrid>
					{WorkData.map((data, i) => {
						const Logo = data.logo
						return (
							<MainLink href={data.link} target="_blank" key={i}>
								<Card>
									<LogoWrapper>
										<Logo width={"50%"} />
									</LogoWrapper>
									<Title>{data.title}</Title>
									<Highlights>
										{data.highlights.map((item, i) => (
											<Highlight key={i}>{item}</Highlight>
										))}
									</Highlights>
									<Dates>
										{data.current
											? `${data.startDate} - Current`
											: `${data.startDate} - ${data.endDate}`}
									</Dates>
								</Card>
							</MainLink>
						)
					})}
				</CardGrid>
			</Section>
		</Layout>
	)
}
const Section = styled("section", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	minHeight: "max-content",
})

const CardGrid = styled("div", {
	justifySelf: "center",
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
	gap: "$m",
	width: "100%",
})

const MainLink = styled(Link, {
	display: "flex",
})

const Card = styled("div", {
	display: "flex",
	flexDirection: "column",
	background: "$dark100",
	padding: "$xl",
	borderRadius: "$radS",
	transition: "$medium",
	position: "relative",

	"&:hover": {
		background: "$dark200",
	},
})

const LogoWrapper = styled("div", {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: 120,
})

const Title = styled("h2", {
	fontSize: 24,
	marginBottom: "$m",
})

const Dates = styled("p", {
	marginTop: "auto",
	textAlign: "center",
	fontSize: "$s",
	opacity: 0.6,
})

const Highlights = styled("ul", {
	listStyle: "none",
	borderLeft: `2px solid $primary100`,
	paddingLeft: 16,
	marginBottom: "$xl",

	"& li + li": {
		marginTop: "$m",
	},
})
const Highlight = styled("li", {
	color: "$light100",
})
