import { Input as ChackraInput, useColorModeValue } from '@chakra-ui/react'
import { ComponentProps, FC, HTMLInputTypeAttribute } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface InputProps extends ComponentProps<'input'> {
  name: string
  type?: HTMLInputTypeAttribute
  defaultValue?: any
  placeholder?: string
  onClick?: () => void
}

const Input: FC<InputProps> = ({ name, type, defaultValue, placeholder, accept, onClick, onChange }) => {
  const { control } = useFormContext()
  const backgroundColor = useColorModeValue('gray.100', 'gray.700')
  const color = useColorModeValue('gray.500', 'gray.200')
  const placeholderColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <ChackraInput
          {...field}
          id={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onClick={onClick}
          onChange={onChange ?? field.onChange}
          accept={accept}
          /** Styles */
          bg={backgroundColor}
          color={color}
          _placeholder={{
            color: placeholderColor,
          }}
          _focusVisible={{
            borderColor: 'none',
          }}
          autoComplete="off"
        />
      )}
    />
  )
}

export default Input
