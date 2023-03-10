import { styled } from "@stitches/react"

export const GradientSpan = styled("span", {
  background: "$primaryGradient",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
})

const smallButton = styled("div", {})

export const PrimaryButton = styled("div", {
  width: "max-content",
  padding: "$s $l",
  background: "$black",
  borderRadius: "$radS",
  transition: "$short",
  position: "relative",
  cursor: "pointer",

  "&::before": {
    content: "",
    background: "$primaryGradient",
    position: "absolute",
    top: -2,
    right: -2,
    bottom: -2,
    left: -2,
    borderRadius: "inherit",
    zIndex: -1,
  },
})

export const AccentButton = styled("div", {
  width: "max-content",
  padding: "$s $l",
  margin: 1,
  background: "$black",
  borderRadius: "$radS",
  position: "relative",
  transition: "$short",
  cursor: "pointer",
  "&:hover": {
    background: "rgba(0,0,0,0)",
  },
  "&::before": {
    content: `''`,
    backgroundImage: "$accentGradient",
    position: "absolute",
    top: "-1px",
    right: "-1px",
    bottom: "-1px",
    left: "-1px",
    borderRadius: "inherit",
    zIndex: -1,
  },
})

export const NeutralButton = styled("div", {
  width: "max-content",
  padding: "$s $l",
  margin: 1,
  backgroundColor: "$black",
  borderRadius: "$radS",
  position: "relative",
  opacity: 0.6,
  transition: "$short",
  cursor: "pointer",
  "&:hover": {
    opacity: 1,
    background: "rgba(0,0,0,0)",
  },
  "&::before": {
    content: `''`,
    backgroundImage: "$grayGradient",
    position: "absolute",
    top: "-1px",
    right: "-1px",
    bottom: "-1px",
    left: "-1px",
    borderRadius: "inherit",
    zIndex: -1,
  },
})
