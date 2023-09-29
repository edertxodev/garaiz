import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { Calendar } from 'react-date-range'
import { FC, SyntheticEvent, useEffect, useMemo, useState } from 'react'
import { LOCAL_STORAGE_KEYS } from 'lib/constants'
import { useDisclosure } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import Input from 'components/form/fields/Input'
import Modal from 'components/common/Modal'
import en from 'date-fns/locale/en-GB'
import es from 'date-fns/locale/es'
import eu from 'date-fns/locale/eu'

interface CustomDatePickerProps {
  name: string
  value?: Date
  label?: string
  placeholder?: string
  onChange: (date: Date | null, event?: SyntheticEvent<any, Event>) => void
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({ name, value, label, placeholder, onChange }) => {
  const { setValue } = useFormContext()
  const locale = localStorage.getItem(LOCAL_STORAGE_KEYS.locale)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [calendarLocale, setCalendarLocale] = useState<Locale>()
  const formatOptions: Intl.DateTimeFormatOptions = useMemo(
    () => ({ year: 'numeric', month: '2-digit', day: '2-digit' }),
    []
  )
  const locales = useMemo(
    () => [
      { key: 'en', value: en },
      { key: 'es', value: es },
      { key: 'eu', value: eu },
    ],
    []
  )

  useEffect(() => {
    if (value && value instanceof Date) {
      setValue(name, value.toLocaleDateString(locale === 'en' ? 'en-GB' : locale ?? 'eu', formatOptions))
    } else {
      setValue(name, value)
    }
  }, [formatOptions, locale, name, setValue, value])

  useEffect(() => {
    const selectedLocaleObject = locales.find((el) => el.key === locale)
    if (selectedLocaleObject) setCalendarLocale(selectedLocaleObject.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale])

  const handleOnChange = (date: Date) => {
    onClose()
    onChange?.(date)
  }

  return (
    <>
      <Input name={name} label={label} placeholder={placeholder} onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} title="Select a date">
        <Calendar date={value} onChange={handleOnChange} locale={calendarLocale} />
      </Modal>
    </>
  )
}

export default CustomDatePicker
