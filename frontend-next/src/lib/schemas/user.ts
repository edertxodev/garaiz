import {
  Enum_Userspermissionsuser_Color as ColorEnum,
  Enum_Userspermissionsuser_Gender as GenderEnum,
  Enum_Userspermissionsuser_Locale as LocaleEnum,
} from '@/lib/graphql/generated'
import { z } from 'zod'

export const UpdateUserSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'This field requires at least 3 characters',
    })
    .max(50, {
      message: 'This field only supports a maximum of 50 characters',
    }),
  lastname: z
    .string()
    .min(3, {
      message: 'This field requires at least 3 characters',
    })
    .max(50, {
      message: 'This field only supports a maximum of 50 characters',
    }),
  gender: z.nativeEnum(GenderEnum, {
    errorMap: () => {
      return { message: 'You must select one option' }
    },
  }),
  birthdate: z.string(),
  color: z.nativeEnum(ColorEnum, {
    errorMap: () => {
      return { message: 'You must select one option' }
    },
  }),
  locale: z.nativeEnum(LocaleEnum, {
    errorMap: () => {
      return { message: 'You must select one option' }
    },
  }),
})

export type UpdateUserFields = z.infer<typeof UpdateUserSchema>
