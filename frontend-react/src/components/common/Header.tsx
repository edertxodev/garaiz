import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { FC, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LOCAL_STORAGE_KEYS } from 'lib/constants'
import { NavLink, useNavigate } from 'react-router-dom'
import { faBars, faBell, faChevronDown, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { getRoutePathByName } from 'lib/routes/helpers'
import { useAuth } from 'lib/auth/AuthContext'

interface HeaderProps {
  onOpen: () => void
}

const Header: FC<HeaderProps> = ({ onOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const navigate = useNavigate()
  const auth = useAuth()

  const styles = {
    menuList: {
      bg: useColorModeValue('white', 'gray.700'),
      borderColor: useColorModeValue('white', 'gray.700'),
    },
  }

  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.token)
    localStorage.removeItem(LOCAL_STORAGE_KEYS.user)
    auth?.setUser(undefined)
    navigate(getRoutePathByName('home'))
  }, [auth, navigate])

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} position="fixed" px={4} w="100%" zIndex={1}>
      <Flex
        color={useColorModeValue('gray.600', 'white')}
        h={16}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          border="none"
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <Box>
          <NavLink to={getRoutePathByName('home')}>
            <Heading>{import.meta.env.VITE_APP_NAME}</Heading>
          </NavLink>
        </Box>

        <HStack justify="flex-end" direction="row" spacing={2}>
          <Button onClick={toggleColorMode} variant="ghost">
            {colorMode === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
          </Button>
          {!auth?.user ? (
            <Button
              fontSize="sm"
              fontWeight={600}
              color="white"
              bg="pink.400"
              _hover={{ bg: 'pink.300' }}
              onClick={() => navigate(getRoutePathByName('login'))}
            >
              Sign in
            </Button>
          ) : (
            <>
              <IconButton size="md" variant="ghost" aria-label="open menu" icon={<FontAwesomeIcon icon={faBell} />} />
              <Flex alignItems={'center'}>
                <Menu>
                  <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                    <HStack>
                      <Avatar size={'sm'} src={auth.user.avatar} />
                      <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
                        <Text fontSize="sm">
                          {auth.user.name} {auth.user.lastname}
                        </Text>
                      </VStack>
                      <Box display={{ base: 'none', md: 'flex' }}>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList bg={styles.menuList.bg} borderColor={styles.menuList.borderColor}>
                    <MenuItem>Profile</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout}>Sign out</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
