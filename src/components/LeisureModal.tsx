import { styled } from "@stitches/react"
import { LeisureItem } from "../../types"
import Image from "next/image"
import { CloseIcon } from "../icons/CloseIcon"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
	IsMobileState,
	IsTabletState,
	ShowLeisureModalState,
} from "../../state/atoms"
import { useState } from "react"
import { MAX_WIDTH } from "../../styles/constants"

type Props = {
	details: LeisureItem
}

export const LeisureModal = ({ details }: Props) => {
	const isMobile = useRecoilValue(IsMobileState)
	const isTablet = useRecoilValue(IsTabletState)
	const setShowModal = useSetRecoilState(ShowLeisureModalState)
	const [showDetails, setShowDetails] = useState(false)
	const size =
		!isMobile && !isTablet && details.image.height === 2000 ? "tall" : "wide"

	const handleCloseModal = () => {
		setShowModal(false)
	}

	return (
		<ModalWrapper>
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
			</ImageWrapper>
		</ModalWrapper>
	)
}

const ModalWrapper = styled("div", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "$l",
	position: "absolute",
	width: "100%",
	height: "100%",
	maxWidth: MAX_WIDTH,
	top: 0,
	left: "50%",
	background: "rgba(0,0,0,.7)",
	transform: "translateX(-50%)",
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

const Category = styled("p", {})
const Title = styled("h2", {})
const Detail = styled("p", {})
