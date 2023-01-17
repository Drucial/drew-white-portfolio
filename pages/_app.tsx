import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { DefaultSeo } from "next-seo"
import { Navbar } from "../src/components/Navbar"
import { Footer } from "../src/components/Footer"
import { AnimatePresence } from "framer-motion"
import { globalStyles } from "../styles/stitches.config"
import { RecoilRoot } from "recoil"
import { useEffect } from "react"
import { useRouter } from "next/router"
import * as Fathom from "fathom-client"

export default function App({ Component, pageProps, router }: AppProps) {
	const url = `https://www.drew-white.dev${router.route}`

	const router2 = useRouter()

	useEffect(() => {
		// Initialize Fathom when the app loads
		// Example: yourdomain.com
		//  - Do not include https://
		//  - This must be an exact match of your domain.
		//  - If you're using www. for your domain, make sure you include that here.
		Fathom.load("MVWVAEIK", {
			includedDomains: ["www.drew-white.dev"],
		})

		function onRouteChangeComplete() {
			Fathom.trackPageview()
		}
		// Record a pageview when route changes
		router2.events.on("routeChangeComplete", onRouteChangeComplete)

		// Unassign event listener
		return () => {
			router2.events.off("routeChangeComplete", onRouteChangeComplete)
		}
	}, [])

	globalStyles()

	return (
		<RecoilRoot>
			<div className="app">
				<Head>
					<link rel="icon" href="/favicon.ico" type="image/png" />
				</Head>
				<DefaultSeo
					titleTemplate="%s - Drew White"
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
			</div>
		</RecoilRoot>
	)
}
