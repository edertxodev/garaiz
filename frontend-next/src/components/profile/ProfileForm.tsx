'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Enum_Userspermissionsuser_Color as ColorEnum,
  Enum_Userspermissionsuser_Gender as GenderEnum,
  Enum_Userspermissionsuser_Locale as LocaleEnum,
} from '@/lib/graphql/generated'
import { Session } from 'next-auth'
import { UpdateUserFields, UpdateUserSchema } from '@/lib/schemas/user'
import { handleUserUpdate } from '@/app/user/profile/actions'
import { useMemo } from 'react'
import { useToast } from '@/components/ui/use-toast'
import Form, { FormField, SelectFormFieldOption } from '@/components/form/Form'

type ProfileFormProps = {
  user: Session['internalUser']
}

export default function ProfileForm({ user }: ProfileFormProps) {
  const { toast } = useToast()
  const genderOptions = useMemo<SelectFormFieldOption[]>(
    () =>
      (Object.keys(GenderEnum) as Array<keyof typeof GenderEnum>).map((gender) => ({
        value: gender,
        label: gender,
      })),
    []
  )
  const colorOptions = useMemo<SelectFormFieldOption[]>(
    () =>
      (Object.keys(ColorEnum) as Array<keyof typeof ColorEnum>).map((color) => ({
        value: color,
        label: color,
      })),
    []
  )
  const localeOptions = useMemo<SelectFormFieldOption[]>(
    () =>
      (Object.keys(LocaleEnum) as Array<keyof typeof LocaleEnum>).map((locale) => ({
        value: locale,
        label: locale.toLowerCase(),
      })),
    []
  )
  const fields = useMemo<FormField[]>(
    () => [
      { name: 'name', type: 'text', label: 'Name', placeholder: 'Name' },
      { name: 'lastname', type: 'text', label: 'Lastname', placeholder: 'Lastname' },
      { name: 'gender', type: 'select', label: 'Gender', options: genderOptions, placeholder: 'Gender' },
      { name: 'birthdate', type: 'date', label: 'Birthdate', placeholder: 'Birthdate' },
      {
        name: 'color',
        type: 'select',
        label: 'Prefered color',
        options: colorOptions,
        placeholder: 'Prefered color',
      },
      { name: 'locale', type: 'select', label: 'Locale', options: localeOptions, placeholder: 'Locale' },
    ],
    [colorOptions, genderOptions, localeOptions]
  )

  async function processForm(data: UpdateUserFields) {
    await handleUserUpdate(data)
      .then(() => toast({ title: 'Success', description: 'User updated successfuly!', variant: 'success' }))
      .catch(() => {
        toast({ title: 'Ooops!', description: 'There was a problem.', variant: 'destructive' })
      })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit your profile</CardTitle>
      </CardHeader>
      <CardContent>
        <Form<UpdateUserFields>
          onSubmit={processForm}
          schema={UpdateUserSchema}
          formFields={fields}
          defaultValues={user}
        />
      </CardContent>
    </Card>
  )
}
