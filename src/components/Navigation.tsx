import { AnimateSharedLayout, motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { isActiveLink } from "../../lib/utils"
import { styled, theme } from "../../styles/stitches.config"

const links: { name: string; href: string }[] = [
	{
		name: "About",
		href: "/",
	},
	{
		name: "Work",
		href: "/work",
	},
	{
		name: "Projects",
		href: "/projects",
	},
	{
		name: "Leisure",
		href: "/leisure",
	},
	{
		name: "Journal",
		href: "/journal",
	},
]

export const Navigation = () => {
	const router = useRouter()
	return (
		<AnimateSharedLayout>
			<NavList>
				{links.map(({ name, href }) => (
					<Link key={name} href={href}>
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
		</AnimateSharedLayout>
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
  width: '100%',
  border: `1px solid ${theme.colors.primary200}`,
  marginTop: 5
}
