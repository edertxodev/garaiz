import { Controller, useFormContext } from 'react-hook-form'
import { FC, useCallback, useEffect, useState } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Text } from '@chakra-ui/react'
import { FormError, handleError } from 'components/form/utils'
import { useTranslation } from 'react-i18next'
import Selector, { SelectorOption } from 'components/common/Selector'

interface SelectProps {
  name: string
  options?: SelectorOption[]
  label?: string
  placeholder?: string
  required?: boolean
  onChange?: (value: any) => void
}

const Select: FC<SelectProps> = ({ name, options, label, placeholder, required, onChange }) => {
  const { t } = useTranslation()
  const { control, formState, setValue } = useFormContext()
  const [error, setError] = useState<FormError>()

  // Handle error
  useEffect(() => {
    setError(handleError(name, formState.errors))
  }, [formState, name])

  const handleChange = useCallback(
    (option: SelectorOption) => {
      setValue(name, option.value)
      onChange?.(option.value)
    },
    [name, onChange, setValue]
  )

  return options ? (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl isInvalid={!!error}>
          {label ? (
            <FormLabel htmlFor={name}>
              {label}
              {required ? (
                <Text as="span" color="orange.200">
                  *
                </Text>
              ) : null}
            </FormLabel>
          ) : null}
          <Selector
            {...field}
            options={options}
            defaultValue={field.value}
            onChange={handleChange}
            placeholder={placeholder}
          />
          {error && (
            <FormErrorMessage>{`${t(`form.errors.${error.key ?? error.message}`, error.params)}`}</FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  ) : null
}

export default Select
