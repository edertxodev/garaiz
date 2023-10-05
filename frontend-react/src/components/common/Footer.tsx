import { FC } from 'react'
import { Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import SocialButton from 'components/common/SocialButton'
import moment from 'moment'

const Footer: FC = () => {
  const { colorMode } = useColorMode()
  const footerBgGradient =
    colorMode === 'light' ? 'linear(to-l, red.100, orange.100)' : 'linear(to-l, gray.800, gray.600)'

  return (
    <Flex
      bgGradient={footerBgGradient}
      direction={{ base: 'column', md: 'row' }}
      bottom={0}
      w="100%"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'space-between' }}
      px={{ base: 2, md: 4 }}
      py={4}
      zIndex={1}
    >
      <Text fontSize="sm" color="gray.400">
        © {moment().year()} Maider Ferreira Makeup
      </Text>
      <HStack spacing={4}>
        <SocialButton href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialButton>
        <SocialButton href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialButton>
      </HStack>
    </Flex>
  )
}

export default Footer
