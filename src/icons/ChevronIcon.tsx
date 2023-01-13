import { SvgGraphic } from "../svg/SvgGraphic"

type Props = {
	width?: string
	height?: string
	color?: string
  rotation?: string
}

export const ChevronIcon = ({ width, height, color, rotation }: Props) => {
	return (
		<SvgGraphic
			width={15}
			height={15}
			fill={color || "currentColor"}
			style={{ width: width || "auto", height: height || "auto", transform: `rotate(${rotation})` || "rotate(0)" }}
		>
			<path
				d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
				fillRule="evenodd"
				clipRule="evenodd"
			></path>
		</SvgGraphic>
	)
}
