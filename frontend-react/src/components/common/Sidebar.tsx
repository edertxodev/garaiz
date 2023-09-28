import { Box, BoxProps, CloseButton, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'
import { faComments, faHome } from '@fortawesome/free-solid-svg-icons'
import { getRoutePathByName } from 'lib/routes/helpers'
import { t } from 'i18next'
import SidebarNavItem from 'components/common/SidebarNavItem'

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const Sidebar: FC<SidebarProps> = ({ onClose, ...props }) => {
  const linkItems = [
    { name: t('links.home'), icon: faHome, path: getRoutePathByName('home') },
    { name: t('links.chat'), icon: faComments, path: getRoutePathByName('chatList') },
  ]

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('pink.700', 'gray.800')}
      w={{ base: 'full', md: 72 }}
      position="fixed"
      h="full"
      zIndex={10}
      {...props}
    >
      <Flex h={20} alignItems="center" mx={8} justifyContent="space-between">
        <Heading color="white">{import.meta.env.VITE_APP_NAME}</Heading>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} color="white" />
      </Flex>
      {linkItems.map((link) => (
        <SidebarNavItem key={link.name} icon={link.icon} path={link.path} onClose={onClose}>
          {link.name}
        </SidebarNavItem>
      ))}
    </Box>
  )
}

export default Sidebar
