import { LayoutGroup, motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { useRecoilState, useRecoilValue } from "recoil"
import { isActiveLink } from "../../lib/utils"
import { IsMobileState, MobileNavShowState } from "../../state/atoms"
import { NAV_HEIGHT } from "../../styles/constants"
import { styled, theme } from "../../styles/stitches.config"
import { NavToggle } from "./NavToggle"

const links: { name: string; href: string }[] = [
	{
		name: "About",
		href: "/",
	},
	{
		name: "Projects",
		href: "/projects",
	},
	{
		name: "Work",
		href: "/work",
	},
	{
		name: "Leisure",
		href: "/leisure",
	},
	{
		name: "Journal",
		href: "https://drucial.com",
	},
]

export const Navigation = () => {
	const router = useRouter()
	const isMobile = useRecoilValue(IsMobileState)
	const [showMobileNav, setShowMobileNav] = useRecoilState(MobileNavShowState)

	const handleHideNav = () => {
		setShowMobileNav((prev) => !prev)
	}

	return (
		<>
			{isMobile ? (
				<MobileNavWrapper>
					<NavToggle />
					<MobileNavList open={showMobileNav}>
						{links.map(({ name, href }) => (
							<Link
								key={name}
								href={href}
								onClick={handleHideNav}
								target={name === "Journal" ? "_blank" : "_self"}
							>
								<NavItem>
									{name}
									{isActiveLink(href, router.pathname) && (
										<motion.div
											layoutId="navigation-underline"
											style={NavUnderline}
											animate
										/>
									)}
								</NavItem>
							</Link>
						))}
					</MobileNavList>
				</MobileNavWrapper>
			) : (
				<LayoutGroup>
					<NavList>
						{links.map(({ name, href }) => (
							<Link
								key={name}
								href={href}
								target={name === "Journal" ? "_blank" : "_self"}
							>
								<NavItem>
									{name}
									{isActiveLink(href, router.pathname) && (
										<motion.div
											layoutId="navigation-underline"
											style={NavUnderline}
											animate
										/>
									)}
								</NavItem>
							</Link>
						))}
					</NavList>
				</LayoutGroup>
			)}
		</>
	)
}

const NavList = styled("ul", {
	display: "flex",
	position: "relative",
})

const NavItem = styled("li", {
	padding: "$s",
})

const NavUnderline = {
	width: "100%",
	border: `1px solid ${theme.colors.primary200}`,
	marginTop: 5,
}

const MobileNavWrapper = styled("div", {})

const MobileNavList = styled("ul", {
	position: "absolute",
	right: "-100%",
	top: NAV_HEIGHT + 8,
	transition: "$medium",

	variants: {
		open: {
			true: { right: 12 },
		},
	},
})
