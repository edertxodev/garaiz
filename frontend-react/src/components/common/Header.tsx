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
import { Enum_Userspermissionsuser_Locale as LocaleEnum } from 'api/graphql/generated/graphql'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  faArrowRightFromBracket,
  faBars,
  faBell,
  faChevronDown,
  faMoon,
  faSun,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { getRoutePathByName } from 'lib/routes/helpers'
import { useAuth } from 'lib/auth/AuthContext'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

interface HeaderProps {
  onOpen: () => void
}

const Header: FC<HeaderProps> = ({ onOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const auth = useAuth()

  const menuListBg = useColorModeValue('white', 'gray.700')
  const menuListBorderColor = useColorModeValue('white', 'gray.700')
  const menuListDividerBorderColor = useColorModeValue('gray.100', 'gray.600')
  const selectedLocaleBg = useColorModeValue('gray.200', 'gray.700')

  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.token)
    localStorage.removeItem(LOCAL_STORAGE_KEYS.user)
    auth?.setUser(undefined)
    navigate(getRoutePathByName('home'))
  }, [auth, navigate])

  const handleLanguageChange = useCallback((locale: string) => {
    i18next.changeLanguage(locale)
  }, [])

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} position="fixed" w="100%" zIndex={1}>
      <Flex
        color={useColorModeValue('gray.600', 'white')}
        h={16}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        alignItems="center"
        justifyContent="space-between"
        px={4}
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
          <Box display="flex" gap={1}>
            {(Object.keys(LocaleEnum) as Array<keyof typeof LocaleEnum>).reverse().map((locale) => (
              <Button
                key={locale}
                onClick={() => handleLanguageChange(locale.toLowerCase())}
                variant="ghost"
                bg={locale.toLowerCase() === i18next.resolvedLanguage ? selectedLocaleBg : 'inherit'}
              >
                {locale.toLowerCase()}
              </Button>
            ))}
          </Box>
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
              {t('general.signIn')}
            </Button>
          ) : (
            <>
              <IconButton size="md" variant="ghost" aria-label="open menu" icon={<FontAwesomeIcon icon={faBell} />} />
              <Flex alignItems={'center'}>
                <Menu>
                  <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                    <HStack>
                      <Avatar size={'sm'} src={auth.user.avatar_url ?? undefined} />
                      <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
                        <Text fontSize="sm" fontWeight="bold">
                          {auth.user.name} {auth.user.lastname}
                        </Text>
                      </VStack>
                      <Box display={{ base: 'none', md: 'flex' }}>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList bg={menuListBg} borderColor={menuListBorderColor} p={0}>
                    <NavLink to={getRoutePathByName('profile')}>
                      <MenuItem py={4} gap={4}>
                        <FontAwesomeIcon icon={faUser} />
                        {t('general.profile')}
                      </MenuItem>
                    </NavLink>
                    <MenuDivider borderColor={menuListDividerBorderColor} my={0} />
                    <MenuItem py={4} gap={4} onClick={handleLogout}>
                      <FontAwesomeIcon icon={faArrowRightFromBracket} />
                      {t('general.signOut')}
                    </MenuItem>
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
