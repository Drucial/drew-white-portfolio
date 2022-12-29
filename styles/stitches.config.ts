import { createStitches } from "@stitches/react";
import {
  FOOTER_HEIGHT,
  MAX_WIDTH,
  NAV_HEIGHT,
  MOBILE_WIDTH,
  TABLET_WIDTH,
  DESKTOP_WIDTH,
} from "./constants";

export const { styled, css, globalCss, theme } = createStitches({
  theme: {
    colors: {
      black: "hsl(0,0%,2%)",
      white: "hsl(0,0%,98%)",
      dark100: "hsl(0,0%,10%)",
      dark200: "hsl(0, 0%, 18%)",
      light100: "hsl(0,0%,80%)",
      light200: "hsl(0,0%,95%)",
      primary100: "hsl(249, 64%, 56%)",
      primary200: "hsl(249, 96%, 57%)",
      accent100: "hsl(278, 52%, 45%)",
      accent200: "hsl(300, 90%, 49%)",
    },
    space: {
      s: "8px",
      m: "16px",
      l: "24px",
      xl: "32px",
      xxl: "48px",
      xxxl: "64px",
      xxxxl: "96px",
    },
    fontSizes: {
      xs: "12px",
      s: "14px",
      m: "16px",
      l: "18px",
      xl: "32px",
      xxl: "64px",
      h4: "20px",
      h3: "28px",
      h2: "34px",
      h1: "48px",
    },
    fonts: {
      heading: "Bebas Neue, apple-system, sans-serif",
      text: "Montserrat, Helvetica, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {
      1: 200,
      2: 400,
      3: 600,
    },
    radii: {
      radS: "4px",
      radL: "8px",
      radF: "999px",
    },
    shadows: {
      small: "0 0 15px rgba(0,0,0,0.25)",
      large: "0 0 35px rgba(0,0,0,0.25)",
    },
    transitions: {
      short: "150ms ease",
      medium: "250ms ease",
      long: "350ms ease",
    },
  },
  media: {
    bp1: `(max-width: ${MOBILE_WIDTH})`,
    bp2: `(max-width: ${TABLET_WIDTH})`,
    bp3: `(max-width: ${DESKTOP_WIDTH})`,
  },
});

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$black",
  },

  main: {
    paddingTop: NAV_HEIGHT,
    paddingBottom: FOOTER_HEIGHT,
    paddingLeft: '$l',
    paddingRight: '$l',
  },

  section: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  "h1, h2, h3, h4": {
    fontFamily: "$heading",
    fontWeight: 500,
  },

  h1: {
    fontSize: "$h1",
    lineHeight: 1,
  },

  h2: {
    fontSize: "clamp($h3, 5vw, $h2)",
    lineHeight: 1.2,
  },

  h3: {
    fontSize: "$h3",
    lineHeight: 1.25,
  },

  h4: {
    fontSize: "$h4",
    lineHeight: 1.3,
  },

  p: {
    fontSize: "$regular",
    lineHeight: 1.4,
  },

  "p + p": {
    marginTop: "$l",
  },

  a: {
    color: "$light200",
    fontWeight: "$4",
    transition: "$short",
    "&:hover": {
      color: "$primary100",
    },
  },
});
