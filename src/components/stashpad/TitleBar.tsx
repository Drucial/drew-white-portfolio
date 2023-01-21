import { styled } from "@stitches/react"
import { theme } from "../../../styles/stitches.config"
import { SearchIcon } from "./icons/SearchIcon"
import { SettingsIcon } from "./icons/SettingsIcon"
import { ShortcutsIcon } from "./icons/ShortcutsIcon"

export const TitleBar = () => {
	return (
		<Wrapper>
			<OSButtons>
				<Circle />
				<Circle />
				<Circle />
			</OSButtons>
			<BreadCrumbs>Home /</BreadCrumbs>
			<Icons>
				<SearchIcon width={15} color={theme.colors.light100.value}/>
				<ShortcutsIcon width={15} color={theme.colors.light100.value}/>
				<SettingsIcon width={15} color={theme.colors.light100.value}/>
			</Icons>
		</Wrapper>
	)
}

const Wrapper = styled("div", {
	display: "grid",
	gridTemplateColumns: "auto auto 1fr",
	alignContent: "center",
	gap: "$m",
	padding: "$s",
})
const OSButtons = styled("div", {
	display: "flex",
  alignItems: 'center',

	"& div + div": {
		marginLeft: "$s",
	},
})
const Circle = styled("div", {
	width: 12,
	height: 12,
	borderRadius: 12,
	background: "hsl(0,0%,50%)",
})

const BreadCrumbs = styled("div", {
	fontSize: 14,
	lineHeight: 1,
	color: '$light100'
})
const Icons = styled("div", {
	display: "flex",
	justifyContent: "flex-end",

	"& svg + svg": {
		marginLeft: "$s",
	},
})
