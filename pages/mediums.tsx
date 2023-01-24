import Masonry from "react-masonry-css"
import { styled } from "@stitches/react"
import { MediumsData } from "../lib/data/mediumsData"
import Layout from "../src/components/Layout"
import Image from "next/image"
import { useState } from "react"
import { MediumsModal } from "../src/components/MediumsModal"
import { MediumsItem } from "../types"
import { useRecoilState } from "recoil"
import { ModalDetailsState, ShowMediumsModalState } from "../state/atoms"
import { AnimatePresence } from "framer-motion"

const title = "Hello, I'm Drew 👋"
const subtitle =
	"I'm a UI/UX Design Engineer at Stashpad, and living in Charlotte, North Carolina."

export default function Mediums() {
	const [showModal, setShowModal] = useRecoilState(ShowMediumsModalState)
	const [modalDetails, setModalDetails] = useRecoilState(ModalDetailsState)
	const breakpointColumnsObj = {
		default: 3,
		1000: 2,
		640: 1,
	}

	const handleClick = (item: MediumsItem) => {
		setModalDetails(item)
		setShowModal((prev) => !prev)
	}

	return (
		<Layout title="Design Mediums" description={`${title} - ${subtitle}`}>
			<Section>
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="masonry-grid"
					columnClassName="masonry-grid-column"
				>
					{MediumsData.map((item, i) => (
						<Card key={i} onClick={() => handleClick(item)}>
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
							/>
						</Card>
					))}
				</Masonry>
			</Section>
		</Layout>
	)
}
const Section = styled("section", {
	minHeight: "100%",
	position: "relative",
})

const Card = styled("div", {
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
