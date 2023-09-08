import { FC } from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

const Loader: FC = () => {
  return (
    <Flex minH="100vh" align="center" justify="center">
      <Spinner />
    </Flex>
  )
}

export default Loader
