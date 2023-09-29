import { Button, InputGroup, InputRightElement, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Input from 'components/form/fields/Input'
import useUserColor from 'lib/hooks/useUserColor'

const ChatForm: FC = () => {
  const { t } = useTranslation()
  const color = useUserColor()
  const { watch } = useFormContext()

  return (
    <InputGroup size="lg">
      <Input name="content" placeholder={t('chat.placeholder.message')} />
      <InputRightElement marginTop={-1}>
        <Button
          bg={useColorModeValue(`${color}.600`, 'green.700')}
          color="white"
          border={1}
          borderColor="inherit"
          borderStyle="solid"
          _hover={{ bg: useColorModeValue(`${color}.500`, 'green.600') }}
          type="submit"
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          isDisabled={!watch('content')}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default ChatForm
