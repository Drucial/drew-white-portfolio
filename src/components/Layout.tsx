import React, { ReactNode, useEffect } from "react"
import { NextSeo } from "next-seo"
import { motion } from "framer-motion"
import { MOBILE_WIDTH, TABLET_WIDTH } from "../../styles/constants"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
	IsDesktopState,
	IsMobileState,
	IsTabletState,
	MobileNavShowState,
} from "../../state/atoms"
import { styled } from "@stitches/react"

type Props = {
	children: ReactNode
	title: string
	description: string
}

const variants = {
	hidden: { opacity: 0, x: "90%", y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: "-80%", y: 0 },
}

const Layout = ({ children, title, description }: Props): JSX.Element => {
	const setIsMobile = useSetRecoilState(IsMobileState)
	const setIsTablet = useSetRecoilState(IsTabletState)
	const setIsDesktop = useSetRecoilState(IsDesktopState)
	const showMobileNav = useRecoilValue(MobileNavShowState)

	const updateIsMobile = () => {
		window.innerWidth <= MOBILE_WIDTH ? setIsMobile(true) : setIsMobile(false)
	}

	const updateIsTablet = () => {
		window.innerWidth <= TABLET_WIDTH ? setIsTablet(true) : setIsTablet(false)
	}

	const updateIsDesktop = () => {
		window.innerWidth > TABLET_WIDTH ? setIsDesktop(true) : setIsDesktop(false)
	}

	useEffect(() => {
		window.addEventListener("resize", () => {
			updateIsMobile()
			updateIsTablet()
			updateIsDesktop()
		})
		return () => {
			window.removeEventListener("resize", () => {
				updateIsMobile()
				updateIsTablet()
				updateIsDesktop()
			})
		}
	})

	useEffect(() => {
		updateIsMobile()
		updateIsTablet()
		updateIsDesktop()
		setViewportHeight()
	})

	const setViewportHeight = () => {
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty("--vh", `${vh}px`)
	}

	useEffect(() => {
		window.addEventListener("resize", setViewportHeight)

		return () => {
			window.removeEventListener("resize", setViewportHeight)
		}
	})
	
	return (
		<>
			<NextSeo
				title={title}
				description={description}
				openGraph={{ title, description }}
			/>
			<Main
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{ delay: 0 }}
				navShow={showMobileNav}
			>
				{children}
			</Main>
		</>
	)
}

export default Layout

const Main = styled(motion.main, {
	variants: {
		navShow: {
			true: {
				transform: "translateX(-100px) !important",
			},
		},
	},
})
