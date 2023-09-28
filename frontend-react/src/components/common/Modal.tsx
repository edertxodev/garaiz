import { Button, Modal as ChakraModal, ModalContent, ModalFooter, ModalHeader } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'
import CustomOverlay from 'components/common/styled/CustomOverlay'

interface ModalProps extends PropsWithChildren {
  title?: string
  defaultFooter?: boolean
  isCentered?: boolean
  isOpen: boolean
  onClose: () => void
}

const Modal: FC<ModalProps> = ({ title, defaultFooter = true, isCentered = true, isOpen, onClose, children }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} isCentered={isCentered}>
      <CustomOverlay />
      <ModalContent>
        {title ? (
          <ModalHeader borderBottom={1} borderStyle="solid" borderColor="inherit">
            {title}
          </ModalHeader>
        ) : null}
        {children}
        {defaultFooter ? (
          <ModalFooter borderTop={1} borderStyle="solid" borderColor="inherit">
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        ) : null}
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
export type { ModalProps }
