import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
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
import { LINK_ITEMS, LOCAL_STORAGE_KEYS } from 'lib/constants'
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
import { useRecoilValue } from 'recoil'
import { useTranslation } from 'react-i18next'
import featureState from 'lib/recoil/atoms/featureState'
import i18next from 'i18next'

interface HeaderProps {
  onOpen: () => void
}

const Header: FC<HeaderProps> = ({ onOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const auth = useAuth()
  const features = useRecoilValue(featureState)

  const headerBgGradient =
    colorMode === 'light' ? 'linear(to-r, red.100, orange.100)' : 'linear(to-r, gray.800, gray.600)'
  const menuListBg = useColorModeValue('white', 'gray.700')
  const menuListBorderColor = useColorModeValue('white', 'gray.700')
  const menuListDividerBorderColor = useColorModeValue('gray.100', 'gray.600')
  const hoverButtonBg = useColorModeValue('orange.200', 'gray.700')
  const linkHoverColor = useColorModeValue('orange.400', 'gray.400')

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
    <Box bgGradient={headerBgGradient} position="fixed" w="100%" zIndex={1}>
      <Flex h={28} alignItems="center" justifyContent="space-between" px={{ base: 2, md: 4 }}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          border="none"
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </IconButton>

        <HStack display={{ base: 'none', md: 'flex' }}>
          {LINK_ITEMS.map((linkItem) => (
            <Link
              key={linkItem.name}
              as={NavLink}
              to={linkItem.path}
              fontWeight="bold"
              transition="all ease 0.5s"
              _hover={{
                color: linkHoverColor,
                textDecoration: 'underline',
                textUnderlineOffset: 6,
              }}
              fontSize="xl"
            >
              {t(`links.${linkItem.name}`)}
            </Link>
          ))}
        </HStack>

        <Box flex={1}>
          <NavLink to={getRoutePathByName('home')}>
            <Heading fontWeight="light" textAlign="center">
              MAIDER FERREIRA
              <Text as="span" fontFamily="altHeading" transform="rotate(-18deg)" position="absolute" mt={5} ml={-10}>
                Makeup
              </Text>
            </Heading>
          </NavLink>
        </Box>

        <HStack justify="flex-end" direction="row" spacing={2}>
          <Box display="flex" gap={1}>
            {(Object.keys(LocaleEnum) as Array<keyof typeof LocaleEnum>).reverse().map((locale) => (
              <Button
                key={locale}
                onClick={() => handleLanguageChange(locale.toLowerCase())}
                variant="ghost"
                bg={locale.toLowerCase() === i18next.resolvedLanguage ? hoverButtonBg : 'inherit'}
                _hover={{ bg: hoverButtonBg }}
                display={{ base: 'none', md: 'flex' }}
              >
                {locale.toLowerCase()}
              </Button>
            ))}
            <Button onClick={toggleColorMode} variant="ghost" _hover={{ bg: hoverButtonBg }}>
              {colorMode === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            </Button>
          </Box>
          {!auth?.user && features.login ? (
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
          ) : null}
          {auth?.user ? (
            <>
              <IconButton size="md" variant="ghost" aria-label="open menu" icon={<FontAwesomeIcon icon={faBell} />} />
              <Flex alignItems={'center'}>
                <Menu>
                  <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                    <HStack>
                      <Avatar size={'sm'} src={auth?.user?.avatar_url ?? undefined} />
                      <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
                        <Text fontSize="sm" fontWeight="bold">
                          {auth?.user?.name} {auth?.user?.lastname}
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
          ) : null}
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
