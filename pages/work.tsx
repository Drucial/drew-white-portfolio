import { styled } from "@stitches/react"
import Link from "next/link"
import { useRecoilValue } from "recoil"
import { WorkData } from "../lib/data/workData"
import Layout from "../src/components/Layout"
import { IsMobileState } from "../state/atoms"
import { GradientSpan } from "../styles/commonStyles"
import { theme } from "../styles/stitches.config"

const title = "Work Experience"
const subtitle = "Check out my recent work experience!"

export default function Work() {
	const isMobile = useRecoilValue(IsMobileState)
	return (
		<Layout title="Work" description={`${title} - ${subtitle}`}>
			<Section mobile={isMobile}>
				<MainTitle>
					<GradientSpan>Work Experience</GradientSpan>
				</MainTitle>
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
	background: "$dark100",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	padding: "$l",

	variants: {
		mobile: {
			true: {
				padding: "$s",
			},
		},
	},
})

const MainTitle = styled("h1", {
	margin: "$xl 0",
})

const CardGrid = styled("div", {
	justifySelf: "center",
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
	gap: "$xl",
	width: "100%",
})

const MainLink = styled(Link, {
	display: "flex",
})

const Card = styled("div", {
	display: "flex",
	flexDirection: "column",
	background: "$dark200",
	padding: "$xl",
	borderRadius: "$radS",
	transform: "scale(.9)",
	transition: "$medium",
	position: "relative",

	"&::after": {
		position: "absolute",
		content: "",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		borderRadius: "$radL",
		opacity: 0,
		boxShadow: `0px 0px 20px ${theme.colors.black}`,
		transition: "$medium",
	},

	"&:hover": {
		transform: "scale(1)",

		"&::after": {
			opacity: 0.5,
		},
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
