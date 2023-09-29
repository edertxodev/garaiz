import { Avatar, Box, ToastId, VStack, useToast } from '@chakra-ui/react'
import {
  Enum_Userspermissionsuser_Color as ColorEnum,
  Enum_Userspermissionsuser_Gender as GenderEnum,
} from 'api/graphql/generated/graphql'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { User, useAuth } from 'lib/auth/AuthContext'
import { addUserToLocalStorage } from 'lib/services/Auth'
import { resolveUserCompleteName } from 'lib/resolvers/userResolvers'
import { useTranslation } from 'react-i18next'
import Form from 'components/form/Form'
import ProfileFormFields from 'components/profile/ProfileFormFields'
import ProfileFormValidationSchema from 'lib/validationSchemas/ProfileFormValidationSchema'
import useUpdateUser from 'api/graphql/hooks/User/useUpdateUser'

const Profile: FC = () => {
  const { t } = useTranslation()
  const auth = useAuth()
  const toast = useToast()
  const toastRef = useRef<ToastId>()
  const [birthdate, setBirthdate] = useState<Date>()
  const { mutateAsync: updateUser } = useUpdateUser()

  // Format birthdate
  useEffect(() => {
    if (auth?.user?.birthdate) setBirthdate(new Date(auth.user.birthdate))
  }, [auth?.user?.birthdate])

  const handleSubmit = useCallback(
    (data: User) => {
      if (data.id) {
        toastRef.current = toast({ description: t('general.updating'), position: 'top', status: 'info' })
        const transformedBirthdate = data.birthdate?.replaceAll('/', '-').split('-')
        if (transformedBirthdate) {
          if (transformedBirthdate[0].length <= 2) {
            data.birthdate = `${transformedBirthdate[2]}-${transformedBirthdate[1]}-${transformedBirthdate[0]}`
          } else {
            data.birthdate = `${transformedBirthdate[0]}-${transformedBirthdate[1]}-${transformedBirthdate[2]}`
          }
        }
        updateUser({
          id: data.id,
          data: {
            name: data.name,
            lastname: data.lastname,
            gender: data.gender ? GenderEnum[data.gender] : undefined,
            color: data.color ? ColorEnum[data.color] : undefined,
            birthdate: data.birthdate,
          },
        })
          .then((response) => {
            const returnedUser = response.updateUsersPermissionsUser.data
            auth?.setUser(
              addUserToLocalStorage({
                id: returnedUser?.id,
                username: returnedUser?.attributes?.username,
                email: returnedUser?.attributes?.email,
                name: returnedUser?.attributes?.name,
                lastname: returnedUser?.attributes?.lastname,
                gender: returnedUser?.attributes?.gender,
                birthdate: returnedUser?.attributes?.birthdate,
                avatar_url: returnedUser?.attributes?.avatar_url,
                color: returnedUser?.attributes?.color,
              })
            )
            if (toastRef.current)
              toast.update(toastRef.current, { description: t('general.updated'), status: 'success' })
          })
          .catch(() => {
            if (toastRef.current) toast.update(toastRef.current, { description: t('general.failed'), status: 'error' })
          })
      }
    },
    [auth, t, toast, updateUser]
  )

  return (
    <VStack width="100%" px={8} pt={8} gap={4}>
      {auth?.user ? (
        <>
          <Box>
            <Avatar size="2xl" name={resolveUserCompleteName(auth.user)} src={auth.user.avatar_url ?? undefined} />
          </Box>
          <Box width="100%">
            <Form defaultValues={auth.user} validationSchema={ProfileFormValidationSchema} onSubmit={handleSubmit}>
              <ProfileFormFields birthdate={birthdate} setBirthdate={setBirthdate} />
            </Form>
          </Box>
        </>
      ) : null}
    </VStack>
  )
}

export default Profile
