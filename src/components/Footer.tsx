import { styled } from "@stitches/react"
import Link from "next/link"
import { FOOTER_HEIGHT, MAX_WIDTH } from "../../styles/constants"
import { GithubLogo } from "../svg/GithubLogo"
import { LinkedinLogo } from "../svg/linkedinLogo"
import { MailLogo } from "../svg/MailLogo"
import { TwitterLogo } from "../svg/TwitterLogo"

export const Footer = () => {
	return (
		<FooterWrapper>
			<Container>
				<IconWrapper>
					<Link href="https://github.com/Drucial">
						<Icon>
							<GithubLogo width={"25"} />
						</Icon>
					</Link>
					<Link href="https://twitter.com/drucial">
						<Icon>
							<TwitterLogo width={"25"} />
						</Icon>
					</Link>
					<Link href="https://www.linkedin.com/in/drucial/">
						<Icon>
							<LinkedinLogo width={"25"} />
						</Icon>
					</Link>
					<Link href="mailto:jdwhite32@gmail.com">
						<Icon>
							<MailLogo width={"25"} />
						</Icon>
					</Link>
				</IconWrapper>
			</Container>
		</FooterWrapper>
	)
}

const FooterWrapper = styled("footer", {
	width: "100%",
	height: FOOTER_HEIGHT,
	bottom: 0,
	padding: "$s",
	zIndex: 99,
})

const Container = styled("div", {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	maxWidth: MAX_WIDTH,
	height: "100%",
	margin: "0 auto",
})

const IconWrapper = styled("div", {
	display: "flex",
})

const Icon = styled("div", {
	padding: "$s",
	color: "$light100",
	opacity: 0.6,
	transition: '$medium',

	'&:hover': {
		opacity: 1,
		color: '$accent100'
	}
})
