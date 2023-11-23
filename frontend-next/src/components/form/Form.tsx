import { Button } from '@/components/ui/button'
import { FieldValues, useForm } from 'react-hook-form'
import { FormItem, FormLabel, FormMessage, Form as UIForm, FormField as UIFormField } from '@/components/ui/form'
import { PropsWithChildren } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import FormElement, { FormElementType } from '@/components/form/FormElement'

export type SelectFormFieldOption = {
  label: string
  value: string
}

export type FormField = {
  name: string
  type: FormElementType
  label?: string
  placeholder?: string
  options?: SelectFormFieldOption[]
}

type FormProps = PropsWithChildren & {
  onSubmit: (data: any) => void
  schema: any
  formFields: FormField[]
  defaultValues?: any
}

export default function Form<T extends FieldValues>({
  onSubmit,
  schema,
  formFields,
  defaultValues,
  children,
}: FormProps) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    mode: 'all',
    defaultValues,
  })

  return (
    <UIForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" autoComplete="off">
        {formFields.map((formField) => (
          <UIFormField
            key={formField.name}
            control={form.control}
            name={formField.name as any}
            render={({ field }) => (
              <FormItem>
                {formField.label ? <FormLabel>{formField.label}</FormLabel> : null}
                <FormElement type={formField.type} controlledField={field} formField={formField} />
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        {children}
        <Button type="submit" variant="secondary" width="full">
          Save
        </Button>
      </form>
    </UIForm>
  )
}
