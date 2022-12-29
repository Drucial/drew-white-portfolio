import { SvgGraphic } from "./SvgGraphic"

type Props = {
	width?: string
	height?: string
	color?: string
}

export const DwLogo = ({ width, height, color }: Props) => {
	return (
		<SvgGraphic
			width={150}
			height={150}
			fill={color || "currentColor"}
			style={{ width: width || "auto", height: height || "auto" }}
		>
			<path
				d="M45.6,36.4H27.4V112h18.1c5.9,0,10.3-1.6,13.3-4.8c3-3.2,4.4-7.8,4.4-13.9V55.1c0-6.1-1.5-10.8-4.4-13.9
	C55.9,38,51.5,36.4,45.6,36.4z M51.4,93.9c0,2.6-0.5,4.5-1.6,5.6c-1,1.2-2.5,1.7-4.4,1.7h-6v-54h6c1.9,0,3.4,0.6,4.4,1.7
	c1.1,1.2,1.6,3,1.6,5.6V93.9z"
			/>
			<polygon
				points="109.9,94.5 109.6,94.5 104,36.4 91.1,36.4 85.5,94.5 85.2,94.5 79.9,36.4 68.5,36.4 76.2,112 91.9,112 97.3,61 
	97.5,61 102.9,112 117.7,112 125.4,36.4 115.2,36.4 "
			/>
			<path
				d="M142,0H8C3.6,0,0,3.6,0,8v134c0,4.4,3.6,8,8,8h134c4.4,0,8-3.6,8-8V8C150,3.6,146.4,0,142,0z M148,142c0,3.3-2.7,6-6,6H8
	c-3.3,0-6-2.7-6-6V8c0-3.3,2.7-6,6-6h134c3.3,0,6,2.7,6,6V142z"
			/>
		</SvgGraphic>
	)
}
