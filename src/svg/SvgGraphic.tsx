import React, { FC, SVGProps } from "react";
export interface SvgGraphicProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export const SvgGraphic: FC<SvgGraphicProps> = ({
  children,
  width,
  height,
  ...restProps
}) => {
  return (
    <svg
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      {children}
    </svg>
  );
};
