import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { FC } from 'react'
import { useAuth } from 'lib/auth/AuthContext'
import { useRoutes } from 'react-router-dom'
import AppRoutes from 'lib/routes/routes'
import Header from 'components/common/Header'
import Sidebar from 'components/common/Sidebar'

const MainLayout: FC = () => {
  const content = useRoutes(AppRoutes)
  const auth = useAuth()
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Box>
      {auth?.user ? <Sidebar onClose={onClose} display={{ base: 'none', md: 'block' }} /> : null}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Header onOpen={onOpen} />
      <Box
        ml={{ base: 0, md: auth?.user ? 72 : 0 }}
        pt={16}
        minHeight="100vh"
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        {content}
      </Box>
    </Box>
  )
}

export default MainLayout
