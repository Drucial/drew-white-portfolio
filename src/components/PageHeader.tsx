import { styled } from "@stitches/react"
import { GradientSpan } from "../../styles/commonStyles"

type Props = {
  title: string
  description: JSX.Element
}

export const PageHeader = ({ title, description }: Props) => {
  return (
    <Section css={{}}>
      <Header>
        <MainTitle>
          <GradientSpan>{title}</GradientSpan>
        </MainTitle>
        <Description>{description}</Description>
      </Header>
    </Section>
  )
}

const Section = styled("section", {
  minHeight: "max-content",
  background: "$dark100",
  padding: "$xxl $l",
  borderRadius: "$radS",
})

const Header = styled("header", {
  maxWidth: 800,
  margin: "0 auto",
})

const MainTitle = styled("h1", {
  marginBottom: "$l",
  width: "max-content",
})

const Description = styled("p", {
  "& span": {
    color: "$primary100",
  },
})
