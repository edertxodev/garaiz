import {
  Input as ChackraInput,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ComponentProps, FC, HTMLInputTypeAttribute, useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FormError, handleError } from 'components/form/utils'
import { useTranslation } from 'react-i18next'

interface InputProps extends ComponentProps<'input'> {
  name: string
  label?: string
  type?: HTMLInputTypeAttribute
  defaultValue?: any
  placeholder?: string
  onClick?: () => void
}

const Input: FC<InputProps> = ({
  name,
  label,
  type,
  defaultValue,
  required,
  placeholder,
  accept,
  onClick,
  onChange,
}) => {
  const { t } = useTranslation()
  const { control, formState } = useFormContext()
  const [error, setError] = useState<FormError>()
  const backgroundColor = useColorModeValue('gray.100', 'gray.700')
  const color = useColorModeValue('gray.500', 'gray.200')
  const placeholderColor = useColorModeValue('gray.400', 'gray.400')

  // Handle error
  useEffect(() => {
    setError(handleError(name, formState.errors))
  }, [formState, name])

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl isInvalid={!!error}>
          {label ? (
            <FormLabel htmlFor={name}>
              {label}{' '}
              {required ? (
                <Text as="span" color="orange.200">
                  *
                </Text>
              ) : null}
            </FormLabel>
          ) : null}
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
          {error && (
            <FormErrorMessage>{`${t(`form.errors.${error.key ?? error.message}`, error.params)}`}</FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  )
}

export default Input
