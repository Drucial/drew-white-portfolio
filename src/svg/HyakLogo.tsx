import { SvgGraphic } from "./SvgGraphic"

type Props = {
	width?: string
	height?: string
}

export const HyakLogo = ({ width, height }: Props) => {
	return (
		<SvgGraphic
			width={349.1}
			height={68.29}
			style={{ width: width || "auto", height: height || "auto" }}
		>
			<path
				d="M68.77 68.29V37.25H12.9v31.04H0V0h12.9v27.16h55.87V0h12.9v68.29h-12.9ZM131.82 68.29V40.55L87.98 0h16.49l33.76 31.23L171.98 0h16.3l-43.55 40.55v27.74h-12.9ZM252.39 68.29l-35.21-55-35.79 55h-14.36L212.43 0h9.41l45.1 68.29h-14.55ZM334.16 68.29l-25.8-30.46h-22.21v30.46h-12.9V0h12.9v27.74h21.92L333.78 0h15.33l-30.36 31.82 30.26 36.47h-14.84Z"
				fill="#fff"
			/>
		</SvgGraphic>
	)
}
