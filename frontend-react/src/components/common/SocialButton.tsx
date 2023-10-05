import { Button, Link, useColorModeValue } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'

interface SocialButtonProps extends PropsWithChildren {
  href: string
}

const SocialButton: FC<SocialButtonProps> = ({ href, children }) => (
  <Link href={href} isExternal>
    <Button
      rounded="full"
      cursor="pointer"
      px={0}
      transition="background 0.8s ease"
      bg="transparent"
      _hover={{
        bg: useColorModeValue('red.200', 'gray.700'),
      }}
    >
      {children}
    </Button>
  </Link>
)

export default SocialButton
