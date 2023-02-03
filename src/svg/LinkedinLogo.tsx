import { SvgGraphic } from "./SvgGraphic"

type Props = {
  width?: string
  height?: string
  color?: string
}

export const LinkedinLogo = ({ width, height, color }: Props) => {
  return (
    <SvgGraphic
      width={512}
      height={512}
      fill={color || "currentColor"}
      style={{ width: width || "auto", height: height || "auto" }}
    >
      <circle cx="256" cy="256" r="256" />
      <g fill="hsl(0,0%,2%)">
        <path d="M116.3 207h59.47v191.16H116.3Zm29.75-95a34.45 34.45 0 1 1-34.47 34.45A34.46 34.46 0 0 1 146.05 112M213 207h57v26.14h.82c7.92-15 27.31-30.88 56.21-30.88 60.16 0 71.27 39.59 71.27 91.07v104.83h-59.4v-93c0-22.17-.38-50.69-30.87-50.69-30.91 0-35.63 24.16-35.63 49.1v94.55H213Z" />
      </g>
    </SvgGraphic>
  )
}
