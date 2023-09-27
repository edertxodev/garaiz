import { Box, Flex, FlexProps, Icon, useColorModeValue } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { NavLink, useLocation } from 'react-router-dom'

interface SidebarNavItemProps extends FlexProps, PropsWithChildren {
  icon?: IconProp
  path: string
  onClose: () => void
}

const SidebarNavItem: FC<SidebarNavItemProps> = ({ icon, path, children, onClose, ...props }) => {
  const { pathname } = useLocation()

  const navItemBg = useColorModeValue('pink.600', 'gray.700')
  const navItemHoverBg = useColorModeValue('pink.500', 'gray.600')

  return (
    <NavLink to={path} onClick={onClose}>
      <Box as="a" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          role="group"
          cursor="pointer"
          bg={pathname === path ? navItemBg : 'transparent'}
          color="white"
          _hover={{
            bg: navItemHoverBg,
            color: 'white',
          }}
          {...props}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
            >
              <FontAwesomeIcon icon={icon} />
            </Icon>
          )}
          {children}
        </Flex>
      </Box>
    </NavLink>
  )
}

export default SidebarNavItem
