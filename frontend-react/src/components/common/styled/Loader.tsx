import { FC } from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

interface LoaderProps {
  fullPage?: boolean
}

const Loader: FC<LoaderProps> = ({ fullPage }) => {
  return (
    <Flex align="center" justify="center" minHeight={fullPage ? '100vh' : 0} width="100%">
      <Spinner />
    </Flex>
  )
}

export default Loader
