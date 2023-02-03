import { styled } from "@stitches/react"
import { useRecoilState } from "recoil"
import { MobileNavShowState } from "../../state/atoms"

export const NavToggle = () => {
  const [showMobileNav, setShowMobileNav] = useRecoilState(MobileNavShowState)
  const handleToggleNav = () => {
    setShowMobileNav((prev) => !prev)
  }

  return (
    <ToggleWrapper onClick={handleToggleNav}>
      <Toggle active={showMobileNav} />
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled("div", {
  width: 30,
  height: 30,
  position: "relative",
  // border: '1px solid white',
})

const Toggle = styled("div", {
  width: "100%",
  height: 2,
  background: "$light100",
  position: "absolute",
  top: "calc(30%)",
  transition: "$medium",

  "&::after": {
    position: "absolute",
    content: "",
    width: "60%",
    height: 2,
    top: 10,
    right: 0,
    background: "$light100",
    transition: "$medium",
  },

  variants: {
    active: {
      true: {
        top: "50%",
        transform: "rotate(-45deg) translateY(-50%)",

        "&::after": {
          width: "100%",
          height: 2,
          top: 0,
          right: 0,
          background: "$light100",
          transform: "rotate(90deg)",
        },
      },
    },
  },
})
