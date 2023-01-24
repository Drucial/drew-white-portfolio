import { styled } from "@stitches/react"
import Link from "next/link"
import { useRecoilState, useRecoilValue } from "recoil"
import { IsDesktopState, ShowLeisureModalState } from "../../state/atoms"
import { MAX_WIDTH, NAV_HEIGHT } from "../../styles/constants"
import { Navigation } from "./Navigation"

export const Navbar = () => {
	const isDesktop = useRecoilValue(IsDesktopState)
	const [showModal, setShowModal] = useRecoilState(ShowLeisureModalState)

	const handleClick = () => {
		if (showModal) {
			setShowModal(false)
		}
	}

	return (
		<Header onClick={handleClick}>
			<NavWrapper>
				<Link href="/">
					<Logo>{isDesktop ? "Drew White" : "DW"}</Logo>
				</Link>
				<Navigation />
			</NavWrapper>
		</Header>
	)
}

const Header = styled("header", {
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

const Logo = styled("div", {
	fontFamily: "$heading",
	fontSize: "clamp(2rem, 3vw, 2rem)",
})
