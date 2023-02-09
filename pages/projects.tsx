import { styled } from "@stitches/react"
import Layout from "../src/components/Layout"
import { ProjectData } from "../lib/data/projectData"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { IsMobileState, IsTabletState } from "../state/atoms"
import { ContractIcon } from "../src/icons/ContractIcon"
import { ExpandIcon } from "../src/icons/ExpandIcon"

const title = "Projects"
const subtitle = "Portfolio projects for UI/UX Design Engineer Drew White"

export default function Projects() {
  const isTablet = useRecoilValue(IsTabletState)
  const isMobile = useRecoilValue(IsMobileState)
  const [expanded, setExpanded] = useState<boolean[]>([])

  useEffect(() => {
    const sectionArray: boolean[] = []
    ProjectData.forEach(() => {
      sectionArray.push(false)
    })
    setExpanded(sectionArray)
  }, [])

  const handleExpandClick = (i: number) => {
    const expandedArr = [...expanded]
    expandedArr[i] = expandedArr[i] ? false : true
    setExpanded(expandedArr)
  }

  return (
    <Layout title="Projects" description={`${title} - ${subtitle}`}>
      {ProjectData.map((project, i) => (
        <Section key={i} mobile={isTablet || isMobile}>
          <ProjectWrapper mobile={isTablet || isMobile}>
            <GraphicsWrapper
              full={expanded[i]}
              mobile={isTablet || isMobile}
              hide={isTablet || isMobile ? (expanded[i] ? false : true) : false}
            >
              <IFrame src={project.link} />
            </GraphicsWrapper>
            <ContentWrapper mobile={isTablet || isMobile}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
              <ProjectDescription mobile={isMobile}>
                {project.description.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </ProjectDescription>
              <ButtonLink href={project.link} target="_blank">
                Visit Project &rarr;
              </ButtonLink>
            </ContentWrapper>
            <ExpandToggle
              mobile={isTablet || isMobile}
              onClick={() => handleExpandClick(i)}
            >
              {expanded[i] ? (
                isMobile ? (
                  <ExpandIcon size={15} />
                ) : (
                  <ContractIcon size={15} />
                )
              ) : isMobile ? (
                <ContractIcon size={15} />
              ) : (
                <ExpandIcon size={15} />
              )}
            </ExpandToggle>
          </ProjectWrapper>
          {isMobile || (isTablet && <NextButton />)}
        </Section>
      ))}
    </Layout>
  )
}
const Section = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  scrollSnapAlign: "start",
  overflow: "hidden",
  variants: {
    mobile: {
      true: {
        height: "100%",
      },
    },
  },
})

const ProjectWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  background: "$dark100",
  width: "80%",
  maxWidth: 1300,
  aspectRatio: 1.778,
  borderRadius: "$radS",

  variants: {
    mobile: {
      true: {
        width: "100%",
        height: "100%",
        aspectRatio: "auto",
      },
    },
  },
})

const GraphicsWrapper = styled("div", {
  top: -16,
  left: -16,
  position: "absolute",
  height: "100%",
  minWidth: 320,
  aspectRatio: 0.46,
  border: "1px solid rgba(255,255,255,.1)",
  borderRadius: "$radS",
  boxShadow: "0px 0px 25px rgba(0,0,0,.5)",
  transition: "$long",
  zIndex: 2,

  variants: {
    full: {
      true: {
        top: 0,
        left: 0,
        aspectRatio: 1.778,
      },
    },
    mobile: {
      true: {
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        aspectRatio: "auto",
      },
    },
    hide: {
      true: {
        top: "-100%",
        opacity: 0,
      },
    },
  },
})

const IFrame = styled("iframe", {
  all: "unset",
  height: "125%",
  width: "125%",
  transform: "scale(0.8)",
  transformOrigin: "top left",
  borderRadius: "$radS",
  overflow: "hidden",
})

const ExpandToggle = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: -10,
  right: -10,
  width: 40,
  height: 40,
  borderRadius: 20,
  background: "$black",
  border: "1px solid $light100",
  color: "$light100",
  cursor: "pointer",
  transform: "scale(.9)",
  transition: "$medium",
  zIndex: 3,

  "&:hover": {
    border: "1px solid $primary100",
    color: "$primary100",
    transform: "scale(1)",
  },

  variants: {
    mobile: {
      true: {
        top: "auto",
        right: "$l",
        bottom: "$l",
        boxShadow: "0px 0px 15px rgba(0,0,0,.3)",
      },
    },
  },
})

const ContentWrapper = styled("div", {
  marginLeft: 320,
  padding: "$xxl",
  variants: {
    mobile: {
      true: {
        margin: 0,
        padding: "$l",
      },
    },
  },
})

const ProjectTitle = styled("h2", {
  fontWeight: "$3",
})
const ProjectSubtitle = styled("h3", {
  fontWeight: "$2",
})
const ProjectDescription = styled("div", {
  color: "$light100",
  margin: "$l 0",

  variants: {
    mobile: {
      true: {
        "& p": {
          lineHeight: 1.5,
        },
      },
    },
  },
})

const ButtonLink = styled(Link, {
  padding: "$s $l",
  background: "$black",
  borderRadius: "$radS",
  position: "relative",
})

const NextButton = styled("div", {
  contet: "next",
})
