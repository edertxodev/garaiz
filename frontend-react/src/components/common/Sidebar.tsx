import { Box, BoxProps, CloseButton, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'
import { IconDefinition, faComments, faHome } from '@fortawesome/free-solid-svg-icons'
import { getRoutePathByName } from 'lib/routes/helpers'
import { t } from 'i18next'
import { useRecoilValue } from 'recoil'
import SidebarNavItem from 'components/common/SidebarNavItem'
import featureState from 'lib/recoil/atoms/featureState'
import useUserColor from 'lib/hooks/useUserColor'

interface SidebarLinkItem {
  name: string
  icon: IconDefinition
  path: string
  active: boolean | null
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const Sidebar: FC<SidebarProps> = ({ onClose, ...props }) => {
  const color = useUserColor()
  const features = useRecoilValue(featureState)

  const linkItems: SidebarLinkItem[] = [
    { name: t('links.home'), icon: faHome, path: getRoutePathByName('home'), active: true },
    { name: t('links.chat'), icon: faComments, path: getRoutePathByName('chatList'), active: features.chat ?? false },
  ]

  return (
    <Box
      bg={useColorModeValue(`${color}.700`, 'gray.800')}
      w={{ base: 'full', md: 72 }}
      position="fixed"
      h="full"
      zIndex={10}
      borderRight={1}
      borderStyle="solid"
      borderColor={useColorModeValue(`${color}.700`, 'gray.700')}
      {...props}
    >
      <Flex h={20} alignItems="center" mx={8} justifyContent="space-between">
        <Heading color="white">{import.meta.env.VITE_APP_NAME}</Heading>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} color="white" />
      </Flex>
      {linkItems.map((link) =>
        link.active ? (
          <SidebarNavItem key={link.name} icon={link.icon} path={link.path} onClose={onClose}>
            {link.name}
          </SidebarNavItem>
        ) : null
      )}
    </Box>
  )
}

export default Sidebar
