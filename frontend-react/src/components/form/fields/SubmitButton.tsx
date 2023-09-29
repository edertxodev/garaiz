import { Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'
import { useFormContext } from 'react-hook-form'

interface SubmitButtonProps extends PropsWithChildren {}

const SubmitButton: FC<SubmitButtonProps> = ({ children }) => {
  const {
    formState: { isValid },
  } = useFormContext()

  return (
    <Flex justifyContent="end" width="100%">
      <Button
        type="submit"
        isDisabled={!isValid}
        bg={useColorModeValue('pink.600', 'gray.600')}
        _hover={{ bg: useColorModeValue('pink.500', 'gray.500') }}
        color="white"
        size="lg"
      >
        {children}
      </Button>
    </Flex>
  )
}

export default SubmitButton
