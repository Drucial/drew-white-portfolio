import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { DefaultSeo } from "next-seo"
import { Navbar } from "../src/components/Navbar"
import { Footer } from "../src/components/Footer"
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps, router }: AppProps) {
	const url = `https://drew-white.dev${router.route}`
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" type="image/png" />
			</Head>
			<DefaultSeo
				titleTemplate="%s - James Wallis"
				openGraph={{
					type: "website",
					locale: "en_IE",
					url,
					description:
						"The personal website for Drew White, UI/UX Design Engineer.",
					site_name: "Drew White | drew-white.dev",
					images: [],
				}}
				canonical={url}
			/>
			<Navbar />
			<AnimatePresence
				mode="wait"
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<Component {...pageProps} canonical={url} key={url} />
			</AnimatePresence>
			<Footer />
		</>
	)
}
