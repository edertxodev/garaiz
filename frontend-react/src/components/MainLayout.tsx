import { Drawer, DrawerContent, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useAuth } from 'lib/auth/AuthContext'
import { useRoutes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AppRoutes from 'lib/routes/routes'
import Header from 'components/common/Header'
import Sidebar from 'components/common/Sidebar'
import useCurrentRoute from 'lib/hooks/useCurrentRoute'

const MainLayout: FC = () => {
  const { t } = useTranslation()
  const content = useRoutes(AppRoutes)
  const auth = useAuth()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const currentRoute = useCurrentRoute()

  return (
    <>
      <Helmet titleTemplate={`${import.meta.env.VITE_APP_NAME} | %s`}>
        <title>{t(`general.routes.${currentRoute?.name}`)}</title>
      </Helmet>
      <Flex minHeight="100vh">
        {auth?.user ? <Sidebar onClose={onClose} display={{ base: 'none', md: 'block' }} /> : null}
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="xs"
        >
          <DrawerContent>
            <Sidebar onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <Header onOpen={onOpen} />
        <Flex
          pl={{ base: 0, md: auth?.user ? 72 : 0 }}
          pt={16}
          display="flex"
          width="100%"
          height="100vh"
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          {content}
        </Flex>
      </Flex>
    </>
  )
}

export default MainLayout
