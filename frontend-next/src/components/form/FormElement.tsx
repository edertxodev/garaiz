import { Calendar } from '@/components/ui/calendar'
import { ControllerRenderProps } from 'react-hook-form'
import { FormControl } from '@/components/ui/form'
import { FormField } from '@/components/form/Form'
import { Input, InputWithIcon } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import { useCallback, useState } from 'react'

export type FormElementType = 'text' | 'email' | 'password' | 'select' | 'date'

type FormElementProps = {
  type: FormElementType
  controlledField: ControllerRenderProps<any>
  formField: FormField
}

export default function FormElement({ type, controlledField, formField }: FormElementProps) {
  const [calendarOpened, setCalendarOpened] = useState<boolean>(false)

  const handleDateChange = useCallback(
    (date?: Date) => {
      let selectedDate = undefined
      if (date) selectedDate = format(date, 'yyyy-MM-dd')
      controlledField.onChange(selectedDate)
      setCalendarOpened(false)
    },
    [controlledField]
  )

  if (type === 'select') {
    return (
      <Select onValueChange={controlledField.onChange} defaultValue={controlledField.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {formField.options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  } else if (type === 'date') {
    return (
      <Popover open={calendarOpened} onOpenChange={setCalendarOpened}>
        <PopoverTrigger asChild>
          <FormControl>
            <InputWithIcon
              icon={faCalendar}
              className="hover:cursor-pointer"
              iconPosition="right"
              placeholder={formField.placeholder}
              {...controlledField}
              value={
                controlledField.value
                  ? format(
                      typeof controlledField.value === 'string'
                        ? new Date(controlledField.value)
                        : controlledField.value,
                      'yyyy-MM-dd'
                    )
                  : undefined
              }
            />
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            mode="single"
            captionLayout="dropdown-buttons"
            fromYear={1900}
            toYear={Number(format(new Date(), 'Y')) - 10} // Max year is current year -10 years
            selected={controlledField.value}
            onSelect={handleDateChange}
            disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    )
  } else {
    return (
      <FormControl>
        <Input placeholder={formField.placeholder} {...controlledField} />
      </FormControl>
    )
  }
}
