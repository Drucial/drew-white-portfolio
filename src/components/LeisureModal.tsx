import { styled } from "@stitches/react"
import { LeisureItem } from "../../types"
import Image from "next/image"
import { CloseIcon } from "../icons/CloseIcon"
import { useRecoilState, useSetRecoilState } from "recoil"
import { ShowLeisureModalState } from "../../state/atoms"
import { useState } from "react"

type Props = {
	details: LeisureItem
}

export const LeisureModal = ({ details }: Props) => {
	const setShowModal = useSetRecoilState(ShowLeisureModalState)
  const [showDetails, setShowDetails] = useState(false)
	const handleCloseModal = () => {
		setShowModal(false)
	}

	return (
		<ModalWrapper>
			<ImageWrapper>
        <GalleryImage
          src={details.image.src}
          alt={details.title}
          width={details.image.width}
          height={details.image.height}
        />
      </ImageWrapper>
			<CloseModal onClick={handleCloseModal}>
				<CloseIcon height={15} />
			</CloseModal>
			{/* <DetailsWrapper>
				<Category>{details.category}</Category>
				<TitleWrapper>
          <Title>{details.title}</Title>
          <p>{showDetails ? "hide details" : "Details..."}</p>
        </TitleWrapper>
				{showDetails && details.details.map((p, i) => (
					<Detail key={i}>{p}</Detail>
				))}
			</DetailsWrapper> */}
		</ModalWrapper>
	)
}

const ModalWrapper = styled("div", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "$l",
	position: "absolute",
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	background: "rgba(0,0,0,.7)",
})

const CloseModal = styled("div", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	top: 8,
	right: 16,
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
  width: '100%',
  height: '100%',
})

const GalleryImage = styled(Image, {
	display: "block",
  objectFit: 'contain',
	width: "100%",
	maxHeight: "100%",
	// maxWidth: "100%",
	// maxHeight: "100%",
	// borderRadius: "$radS",
	// boxShadow: "$large",
})

const DetailsWrapper = styled("div", {
  position: 'absolute',
  bottom: 0,
  left: "50%",
  transform: 'translateX(-50%)',
  width: 600,
  maxWidth: '100%',
  padding: '$l',
  background: 'rgba(0,0,0,.7)',
  backdropFilter: 'blur(8px)',
  borderRadius: '$radL'
})

const Category = styled("p", {})

const TitleWrapper = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',

  '& p': {
    lineHeight: 1.2,
    marginLeft: '$l',
    opacity: 0.6
  }
})
const Title = styled("h2", {})
const Detail = styled("p", {})
