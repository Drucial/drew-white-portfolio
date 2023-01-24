import { styled } from "@stitches/react"
import { MediumsItem } from "../../types"
import Image from "next/image"
import { CloseIcon } from "../icons/CloseIcon"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
	IsMobileState,
	IsTabletState,
	ShowMediumsModalState,
} from "../../state/atoms"
import { useState } from "react"
import { FOOTER_HEIGHT, MAX_WIDTH, NAV_HEIGHT } from "../../styles/constants"
import { motion } from "framer-motion"

type Props = {
	details: MediumsItem
}

export const MediumsModal = ({ details }: Props) => {
	const isMobile = useRecoilValue(IsMobileState)
	const isTablet = useRecoilValue(IsTabletState)
	const setShowModal = useSetRecoilState(ShowMediumsModalState)
	const [showDetails, setShowDetails] = useState(false)
	const size =
		!isMobile && !isTablet && details.image.height === 2000 ? "tall" : "wide"

	const handleCloseModal = () => {
		setShowModal(false)
	}

	const variants = {
		hidden: { opacity: 0 },
		enter: { opacity: 1 },
		exit: { opacity: 0 },
	}

	return (
		<ModalWrapper
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			mobile={isMobile}
		>
			<ImageWrapper size={size}>
				<GalleryImage
					size={size}
					src={details.image.src}
					alt={details.title}
					width={details.image.width}
					height={details.image.height}
				/>
				<CloseModal onClick={handleCloseModal}>
					<CloseIcon height={15} />
				</CloseModal>
				{!isMobile && (
					<ProjectDetails mobile={isMobile}>
						<Category>{details.category}</Category>
						<Title>{details.title}</Title>
						{details.details.map((p, i) => (
							<Detail key={i}>{p}</Detail>
						))}
					</ProjectDetails>
				)}
			</ImageWrapper>
			{isMobile && (
				<ProjectDetails>
					<Category>{details.category}</Category>
					<Title>{details.title}</Title>
					{details.details.map((p, i) => (
						<Detail key={i}>{p}</Detail>
					))}
				</ProjectDetails>
			)}
		</ModalWrapper>
	)
}

const ModalWrapper = styled(motion.div, {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	padding: "$l",
	position: "absolute",
	width: "100%",
	maxWidth: MAX_WIDTH,
	top: NAV_HEIGHT,
	bottom: FOOTER_HEIGHT,
	left: "50%",
	background: "rgba(0,0,0,.8)",
	transform: "translateX(-50%)",

	variants: {
		mobile: {
			true: {
				padding: "$l $m",
				background: "$black",
			},
		},
	},
})

const CloseModal = styled("div", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	top: -8,
	right: -8,
	width: 30,
	height: 30,
	borderRadius: 15,
	border: "1px solid $primary100",
	background: "$black",
	transition: "$medium",
	cursor: "pointer",
	zIndex: 2,

	"&:hover": {
		background: "$dark100",
		color: "$primary100",
	},
})

const ImageWrapper = styled("div", {
	position: "relative",
	variants: {
		size: {
			tall: {
				height: "100%",
				width: "auto",
			},
			wide: {
				width: "100%",
				height: "auto",
			},
		},
	},
})

const GalleryImage = styled(Image, {
	display: "block",
	borderRadius: "$radS",

	variants: {
		size: {
			tall: {
				height: "100%",
				width: "auto",
			},
			wide: {
				width: "100%",
				height: "auto",
			},
		},
	},
})

const ProjectDetails = styled("div", {
	padding: "$m 0",
	width: "100%",

	variants: {
		mobile: {
			false: {
				position: "absolute",
				top: 0,
				left: 0,
				padding: "$m",
				background: "rgba(0,0,0,.7)",
				borderRadius: "$radS",
				zINdex: 1,
			},
		},
	},
})
const Category = styled("p", {
	lineHeight: 1,
})
const Title = styled("h2", {
	color: "$primary100",
	marginBottom: "$m",
})
const Detail = styled("p", {
	lineHeight: 1.2,
})
