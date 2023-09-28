import { Button, ButtonGroup, ModalBody, ModalFooter } from '@chakra-ui/react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Modal, { ModalProps } from 'components/common/Modal'

interface ConfirmationModalProps extends ModalProps {
  confirmationFn?: () => void
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({ isOpen, onClose, confirmationFn }) => {
  const { t } = useTranslation()

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('general.confirmModal.message')} defaultFooter={false}>
      <ModalBody p={0}>
        <ModalFooter>
          <ButtonGroup spacing={2}>
            <Button bg="red.600" color="white" _hover={{ bg: 'red.500' }} onClick={confirmationFn}>
              {t('general.yes')}
            </Button>
            <Button variant="ghost" onClick={onClose}>
              {t('general.no')}
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalBody>
    </Modal>
  )
}

export default ConfirmationModal
