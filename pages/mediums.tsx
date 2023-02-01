import Masonry from "react-masonry-css"
import { styled } from "@stitches/react"
import { MediumsData } from "../lib/data/mediumsData"
import Layout from "../src/components/Layout"
import Image from "next/image"
import { MediumsItem } from "../types"
import { useSetRecoilState } from "recoil"
import { ModalDetailsState, ShowMediumsModalState } from "../state/atoms"
import { motion } from "framer-motion"
import { MAX_WIDTH, MOBILE_WIDTH } from "../styles/constants"
import { GradientSpan } from "../styles/commonStyles"

const title = "Hello, I'm Drew 👋"
const subtitle =
	"I'm a UI/UX Design Engineer at Stashpad, and living in Charlotte, North Carolina."

export default function Mediums() {
	const setShowModal = useSetRecoilState(ShowMediumsModalState)
	const setModalDetails = useSetRecoilState(ModalDetailsState)
	const breakpointColumnsObj = {
		default: 3,
		1000: 2,
		640: 1,
	}

	const handleClick = (item: MediumsItem) => {
		setModalDetails(item)
		setShowModal((prev) => !prev)
	}

	const variants = {
		hidden: { opacity: 0 },
		enter: { opacity: 1 },
		exit: { opacity: 0 },
	}

	return (
		<Layout title="Design Mediums" description={`${title} - ${subtitle}`}>
			<Header>
				<MainTitle>
					<GradientSpan>Mediums</GradientSpan>
				</MainTitle>
				<Description>
					While my primary focus is UX/UI design and software enginnering, I am a student of many other design mediums as well. For the last 8 years my free-time has been occupied by <span>architectural, interior and 3D design</span> both as a freelancer and a hobbyist. Below you can see some examples of this work.
				</Description>
			</Header>
			<Section>
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="masonry-grid"
					columnClassName="masonry-grid-column"
				>
					{MediumsData.map((item, i) => (
						<Card
							key={i}
							initial="hidden"
							animate="enter"
							exit="exit"
							variants={variants}
							onClick={() => handleClick(item)}
						>
							<HoverDetails>
								<Category>{item.category}</Category>
								<Title>{item.title}</Title>
							</HoverDetails>
							<GalleryImage
								key={i}
								src={item.image.src}
								alt={item.title}
								width={item.image.width}
								height={item.image.height}
								sizes={`(max-width: ${MOBILE_WIDTH}) 100vw,(max-width: ${MAX_WIDTH}) 50vw, ${
									MAX_WIDTH / 3
								}`}
							/>
						</Card>
					))}
				</Masonry>
			</Section>
		</Layout>
	)
}

const Header = styled("div", {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	margin: "$xl $m $xxl",
})

const MainTitle = styled("h1", {
	marginBottom: '$l',
})
const Description = styled("p", {
	maxWidth: 900,
	textAlign: 'center',

	'& span': {
		color: '$primary100'
	}
})

const Section = styled("section", {
	minHeight: "max-content",
	position: "relative",
})

const Card = styled(motion.div, {
	position: "relative",
})

const HoverDetails = styled("div", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	background: "rgba(0,0,0,.7)",
	position: "absolute",
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	cursor: "pointer",
	opacity: 0,
	transition: "$medium",

	"&:hover": {
		opacity: 1,
	},
})
const Category = styled("p", {})
const Title = styled("h2", {})

const GalleryImage = styled(Image, {
	display: "block",
	width: "100%",
	height: "auto",
	maxHeight: "100%",
	borderRadius: "$radS",
})
