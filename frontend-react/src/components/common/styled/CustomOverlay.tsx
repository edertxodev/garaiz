import { FC } from 'react'
import { ModalOverlay } from '@chakra-ui/react'

const CustomOverlay: FC = () => {
  return <ModalOverlay bg="blackAlpha.50" backdropFilter="blur(10px) hue-rotate(90deg)" />
}

export default CustomOverlay
