import { keyframes, styled } from "@stitches/react"
import { FOOTER_HEIGHT } from "../../styles/constants"
import { ChevronIcon } from "../icons/ChevronIcon"

export const ScrollIndicator = () => {
  const handleScroll = () => {}

  return (
    <Wrapper onClick={handleScroll}>
      <Text>Scroll</Text>
      <ChevronIcon width={"35"} />
    </Wrapper>
  )
}

const bounce = keyframes({
  "0%": { transform: "translate(-50%, 0px)" },
  "50%": { transform: "translate(-50%, -10px)" },
  "100%": { transform: "translate(-50%, 0px)" },
})

const Wrapper = styled("div", {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  bottom: FOOTER_HEIGHT + 8,
  left: "50%",
  transform: "translateX(-50%)",
  cursor: "pointer",
  opacity: 0.6,
  transition: "$medium",

  "&:hover": {
    opacity: 1,
    animation: `${bounce} 1500ms ease-in-out infinite`,
  },
})

const Text = styled("p", {})
