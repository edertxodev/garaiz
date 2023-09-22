import { ComponentProps, FC, useEffect } from 'react'
import { DevTool } from '@hookform/devtools'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { ObjectSchema } from 'yup'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import SubmitButton from 'components/form/fields/SubmitButton'

interface FormSubmitError {
  messageKey: string
  statusCode?: number
}

interface FormProps<T extends FieldValues = any> extends ComponentProps<'form'> {
  validationSchema?: ObjectSchema<T>
  defaultValues?: any
  onSubmit?: any
  submitText?: string | null
  submitErrors?: FormSubmitError[]
  resetOnSubmit?: boolean
}

const Form: FC<FormProps> = ({
  validationSchema,
  defaultValues,
  onSubmit,
  submitText,
  submitErrors,
  resetOnSubmit,
  children,
}) => {
  const { t } = useTranslation()
  const form = useForm({
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    mode: 'all',
    defaultValues,
  })

  const keyDownHandler = (event: KeyboardEvent) => {
    if (validationSchema) {
      if (event.key && event.key.toLowerCase() === 'enter') {
        validationSchema.validate(form.getValues()).then(() => {
          onSubmit?.(form.getValues())
          if (resetOnSubmit) form.reset()
        })
      }
    } else {
      if (event.key && event.key.toLowerCase() === 'enter') {
        onSubmit?.(form.getValues())
        if (resetOnSubmit) form.reset()
      }
    }
  }

  useEffect(() => {
    if (form.formState.isSubmitted && resetOnSubmit) {
      form.reset()
    }
  }, [form, form.formState.isSubmitted, resetOnSubmit])

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler, false)

    return () => window.removeEventListener('keydown', keyDownHandler, false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FormProvider {...form}>
      {children}
      <div className="text-center mb-6">
        {submitErrors?.map((submitError) => (
          <span key={submitError.statusCode} className="text-xs font-bold text-red-500">{`${t(
            submitError.messageKey
          )}`}</span>
        ))}
      </div>
      <SubmitButton submit={onSubmit}>{submitText ?? t('form.button.save')}</SubmitButton>
      {import.meta.env.MODE === 'development' && <DevTool control={form.control} />}
    </FormProvider>
  )
}

export default Form
export type { FormSubmitError }
