import { FC } from 'react'
import { ModalOverlay } from '@chakra-ui/react'

const CustomOverlay: FC = () => {
  return <ModalOverlay bg="whiteAlpha.100" backdropFilter="blur(5px)" />
}

export default CustomOverlay
