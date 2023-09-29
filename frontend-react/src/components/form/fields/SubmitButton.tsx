import { Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'
import { useFormContext } from 'react-hook-form'
import useUserColor from 'lib/hooks/useUserColor'

interface SubmitButtonProps extends PropsWithChildren {}

const SubmitButton: FC<SubmitButtonProps> = ({ children }) => {
  const color = useUserColor()
  const {
    formState: { isValid, isSubmitting },
  } = useFormContext()

  return (
    <Flex justifyContent="end" width="100%">
      <Button
        type="submit"
        isDisabled={!isValid}
        bg={useColorModeValue(`${color}.600`, 'gray.600')}
        _hover={{ bg: useColorModeValue(`${color}.500`, 'gray.500') }}
        color="white"
        size="lg"
        isLoading={isSubmitting}
      >
        {children}
      </Button>
    </Flex>
  )
}

export default SubmitButton
