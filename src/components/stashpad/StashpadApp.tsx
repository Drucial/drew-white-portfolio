import { styled } from "@stitches/react"
import { useEffect, useRef } from "react"
import { useRecoilState } from "recoil"
import { IsNarrowAppState } from "../../../state/atoms"
import { MainUI } from "./MainUI"
import { TitleBar } from "./TitleBar"

export const StashpadApp = () => {
	const appRef = useRef<HTMLDivElement>(null)
	const [isNarrowApp, setIsNarrowApp] = useRecoilState(IsNarrowAppState)

	return (
		<AppContainer ref={appRef}>
			<TitleBar />
			<MainUI />
		</AppContainer>
	)
}

const AppContainer = styled("div", {
	display: "grid",
	gridTemplateRows: "auto 1fr",
	width: "100%",
	height: "100%",
	background: "rgba(0,0,0,.5)",
	borderRadius: "$radL",
	border: "1px solid rgba(255, 255, 255,.2)",
	backdropFilter: "blur(16px)",
})
