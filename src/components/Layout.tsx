import React, { ReactNode } from "react"
import { NextSeo } from "next-seo"
import { motion } from "framer-motion"

type Props = {
	children: ReactNode
	title: string
	description: string
}

const variants = {
	hidden: { opacity: 0, x: "20%", y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: "-20%", y: 0 },
}

const Layout = ({ children, title, description }: Props): JSX.Element => (
	<>
		<NextSeo
			title={title}
			description={description}
			openGraph={{ title, description }}
		/>
		<motion.main
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{ delay: 0 }}
		>
			{children}
		</motion.main>
	</>
)

export default Layout
