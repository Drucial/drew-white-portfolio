import React, { ReactNode, useEffect } from "react"
import { NextSeo } from "next-seo"
import { AnimatePresence, motion } from "framer-motion"
import { MOBILE_WIDTH, TABLET_WIDTH } from "../../styles/constants"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
  IsDesktopState,
  IsMobileState,
  IsTabletState,
  MobileNavShowState,
  ModalDetailsState,
  ShowMediumsModalState,
} from "../../state/atoms"
import { styled } from "@stitches/react"
import { MediumsModal } from "./MediumsModal"

type Props = {
  children: ReactNode
  title: string
  description: string
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

const Layout = ({ children, title, description }: Props): JSX.Element => {
  const setIsMobile = useSetRecoilState(IsMobileState)
  const setIsTablet = useSetRecoilState(IsTabletState)
  const setIsDesktop = useSetRecoilState(IsDesktopState)
  const showMobileNav = useRecoilValue(MobileNavShowState)
  const showModal = useRecoilValue(ShowMediumsModalState)
  const modalDetails = useRecoilValue(ModalDetailsState)

  const updateIsMobile = () => {
    window.innerWidth <= MOBILE_WIDTH ? setIsMobile(true) : setIsMobile(false)
  }

  const updateIsTablet = () => {
    window.innerWidth <= TABLET_WIDTH ? setIsTablet(true) : setIsTablet(false)
  }

  const updateIsDesktop = () => {
    window.innerWidth > TABLET_WIDTH ? setIsDesktop(true) : setIsDesktop(false)
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      updateIsMobile()
      updateIsTablet()
      updateIsDesktop()
    })
    return () => {
      window.removeEventListener("resize", () => {
        updateIsMobile()
        updateIsTablet()
        updateIsDesktop()
      })
    }
  })

  useEffect(() => {
    updateIsMobile()
    updateIsTablet()
    updateIsDesktop()
    setViewportHeight()
  })

  const setViewportHeight = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }

  useEffect(() => {
    window.addEventListener("resize", setViewportHeight)

    return () => {
      window.removeEventListener("resize", setViewportHeight)
    }
  })

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          images: [
            {
              url: "/preview-image.png",
              width: 1398,
              height: 857,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <Main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ delay: 0 }}
        navShow={showMobileNav}
      >
        {children}
      </Main>
      <AnimatePresence>
        {showModal && <MediumsModal details={modalDetails!} />}
      </AnimatePresence>
    </>
  )
}

export default Layout

const Main = styled(motion.main, {
  width: "100%",
  height: "100%",
  overflowY: "scroll",
  overflowX: "hidden",
  transition: "$medium",

  variants: {
    navShow: {
      true: {
        transform: "translateX(-100px) !important",
      },
    },
  },
})
