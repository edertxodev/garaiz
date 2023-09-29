import { FC, useMemo } from 'react'
import { useColorMode, useToken } from '@chakra-ui/react'
import Select, { StylesConfig } from 'react-select'

export interface SelectorOption {
  value: any
  label?: string | number | null
  color?: string
}

interface SelectorProps {
  options: SelectorOption[]
  closeOnSelect?: boolean
  multiple?: boolean
  placeholder?: string
  searchable?: boolean
  loading?: boolean
  defaultValue?: string
  onChange?: (value: any) => void
}

const colorDot = (color?: any) => {
  if (color) {
    return {
      alignItems: 'center',
      display: 'flex',

      ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
      },
    }
  }

  return {}
}

const Selector: FC<SelectorProps> = ({
  options,
  closeOnSelect,
  multiple,
  placeholder,
  searchable,
  loading,
  defaultValue,
  onChange,
}) => {
  const { colorMode } = useColorMode()
  const [bgLight, bgDark] = useToken('colors', ['gray.100', 'gray.700'])
  const [bgHoverLight, bgHoverDark] = useToken('colors', ['gray.200', 'gray.800'])
  const [colorLight, colorDark] = useToken('colors', ['gray.500', 'gray.200'])
  const [placeholderLight, placeholderDark] = useToken('colors', ['gray.400', 'gray.400'])
  const [multipleValueBgLight, multipleValueBgDark] = useToken('colors', ['gray.200', 'gray.600'])

  const styles = useMemo<StylesConfig<SelectorOption>>(
    () => ({
      control: (base) => ({
        ...base,
        backgroundColor: colorMode === 'light' ? bgLight : bgDark,
        color: colorMode === 'light' ? colorLight : colorDark,
        width: '100%',
        padding: 'var(--chakra-space-2)',
        border: '1px solid',
        borderColor: 'inherit',
        borderRadius: 'var(--chakra-radii-md)',
        minWidth: '200px',
        flex: 1,
      }),
      placeholder: (base) => ({
        ...base,
        color: colorMode === 'light' ? placeholderLight : placeholderDark,
      }),
      menu: (base) => ({
        ...base,
        marginTop: 'var(--chakra-space-1)',
        borderRadius: 'var(--chakra-radii-md)',
        backgroundColor: colorMode === 'light' ? bgLight : bgDark,
        border: '1px solid',
        borderColor: 'inherit',
      }),
      option: (base, { isSelected, data }) => {
        const backgroundColor = colorMode === 'light' ? bgHoverLight : bgHoverDark

        return {
          ...base,
          ...colorDot(data.color),
          padding: 'var(--chakra-space-2) var(--chakra-space-3)',
          backgroundColor: isSelected ? backgroundColor : 'inherit',
          ':hover': {
            cursor: 'pointer',
            backgroundColor: colorMode === 'light' ? bgHoverLight : bgHoverDark,
          },
        }
      },
      multiValue: (base) => ({
        ...base,
        backgroundColor: colorMode === 'light' ? multipleValueBgLight : multipleValueBgDark,
        paddingLeft: 'var(--chakra-space-2)',
        paddingRight: 'var(--chakra-space-1)',
      }),
      noOptionsMessage: (base) => ({
        ...base,
        color: colorMode === 'light' ? colorLight : colorDark,
        padding: 'var(--chakra-space-2)',
      }),
      singleValue: (base, { data }) => ({ ...base, ...colorDot(data.color) }),
    }),
    [
      bgDark,
      bgHoverDark,
      bgHoverLight,
      bgLight,
      colorDark,
      colorLight,
      colorMode,
      multipleValueBgDark,
      multipleValueBgLight,
      placeholderDark,
      placeholderLight,
    ]
  )

  return (
    <Select
      options={options}
      closeMenuOnSelect={closeOnSelect ?? true}
      isMulti={multiple}
      placeholder={placeholder}
      isSearchable={searchable}
      styles={styles}
      hideSelectedOptions={false}
      isLoading={loading}
      unstyled
      onChange={(value) => onChange?.(value)}
      defaultValue={options.find((option) => option.value === defaultValue)}
    />
  )
}

export default Selector
