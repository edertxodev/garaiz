import { Input as ChackraInput, useColorModeValue } from '@chakra-ui/react'
import { ComponentProps, FC, HTMLInputTypeAttribute, useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FormError, parseFormErrorMessage } from 'components/form/utils'
import { useTranslation } from 'react-i18next'

interface InputProps extends ComponentProps<'input'> {
  name: string
  type?: HTMLInputTypeAttribute
  defaultValue?: any
  label?: string | null
  placeholder?: string
  onClick?: () => void
}

const Input: FC<InputProps> = ({ name, type, defaultValue, label, placeholder, accept, hidden, onClick, onChange }) => {
  const { control, formState } = useFormContext()
  const { t } = useTranslation()
  const [error, setError] = useState<FormError>()
  const backgroundColor = useColorModeValue('gray.100', 'gray.700')
  const color = useColorModeValue('gray.500', 'gray.200')
  const placeholderColor = useColorModeValue('gray.500', 'gray.400')

  useEffect(() => {
    const errors = JSON.parse(JSON.stringify(formState.errors))
    const parsedFieldName = name.split('.')[1]
    if (errors['data'] && Object.keys(errors['data']).length > 0 && errors['data'][parsedFieldName]) {
      setError(parseFormErrorMessage(errors['data'][parsedFieldName]?.message?.toString()))
    } else if (errors[name]) {
      setError(parseFormErrorMessage(errors[name]?.message?.toString()))
    } else {
      setError(undefined)
    }
  }, [formState, name])

  return (
    <div className={`mb-6 w-full ${hidden ? 'hidden' : ''}`}>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={name}>
          {label}
        </label>
      )}
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
          />
        )}
      />
      {error && (
        <span className="text-xs font-bold text-red-500">{`${t(
          `form.error.${error.key ?? error.message}`,
          error.params
        )}`}</span>
      )}
    </div>
  )
}

export default Input
