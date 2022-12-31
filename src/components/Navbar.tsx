import { styled } from "@stitches/react"
import Link from "next/link"
import { useRecoilValue } from "recoil"
import { IsDesktopState } from "../../state/atoms"
import { MAX_WIDTH, NAV_HEIGHT } from "../../styles/constants"
import { Navigation } from "./Navigation"

export const Navbar = () => {
  const isDesktop = useRecoilValue(IsDesktopState)
	return (
		<Header>
			<NavWrapper>
				<Link href="/">
					<Logo>{isDesktop ? "Drew White" : "DW"}</Logo>
				</Link>
				<Navigation/>
			</NavWrapper>
		</Header>
	)
}

const Header = styled("header", {
	position: "absolute",
	width: "100%",
  height: NAV_HEIGHT,
	top: 0,
	padding: "$s",
  zIndex: 99,
})

const NavWrapper = styled("nav", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	maxWidth: MAX_WIDTH,
	margin: "0 auto",
})

const Logo = styled('div', {
  fontFamily: "$heading",
  fontSize: "clamp(1rem, 3vw, 2rem)"
})