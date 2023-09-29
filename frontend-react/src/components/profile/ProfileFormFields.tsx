import {
  Enum_Userspermissionsuser_Color as ColorEnum,
  Enum_Userspermissionsuser_Gender as GenderEnum,
} from 'api/graphql/generated/graphql'
import { Dispatch, FC, SetStateAction, useCallback, useMemo } from 'react'
import { Flex } from '@chakra-ui/react'
import { SelectorOption } from 'components/common/Selector'
import { useTranslation } from 'react-i18next'
import CustomDatePicker from 'components/form/fields/CustomDatePicker'
import Input from 'components/form/fields/Input'
import Select from 'components/form/fields/Select'

interface ProfileFormFieldsProps {
  birthdate?: Date
  setBirthdate: Dispatch<SetStateAction<Date | undefined>>
}

const ProfileFormFields: FC<ProfileFormFieldsProps> = ({ birthdate, setBirthdate }) => {
  const { t } = useTranslation()

  const genderOptions = useMemo<SelectorOption[]>(
    () =>
      (Object.keys(GenderEnum) as Array<keyof typeof GenderEnum>).map((gender) => ({
        value: gender,
        label: t(`general.genders.${gender.toLowerCase()}`),
      })),
    [t]
  )

  const colorOptions = useMemo<SelectorOption[]>(
    () =>
      (Object.keys(ColorEnum) as Array<keyof typeof ColorEnum>).map((color) => ({
        value: color,
        label: t(`general.colors.${color.toLowerCase()}`),
        color: color.toLowerCase(),
      })),
    [t]
  )

  const handleBirthdateChange = useCallback(
    (date: Date | null) => {
      setBirthdate(date ?? undefined)
    },
    [setBirthdate]
  )

  return (
    <>
      <Flex gap={8} pb={4}>
        <Input name="name" label={t('form.fields.name')} placeholder={t('form.fields.name')} required />
        <Input name="lastname" label={t('form.fields.lastname')} placeholder={t('form.fields.lastname')} required />
      </Flex>
      <Flex gap={8} pb={4}>
        <Select
          name="gender"
          options={genderOptions}
          label={t('form.fields.gender')}
          placeholder={t('form.fields.selectOne')}
        />
        <Select
          name="color"
          options={colorOptions}
          label={t('form.fields.color')}
          placeholder={t('form.fields.selectOne')}
        />
      </Flex>
      <Flex gap={8} pb={4}>
        <CustomDatePicker
          name="birthdate"
          value={birthdate}
          onChange={handleBirthdateChange}
          label={t('form.fields.birthdate')}
          placeholder={t('form.fields.birthdate')}
        />
      </Flex>
    </>
  )
}

export default ProfileFormFields
