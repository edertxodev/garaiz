'use server'

import { Session } from 'next-auth'
import { UpdateUserFields } from '@/lib/schemas/user'
import { getProfile } from '@/lib/graphql/queries/User'
import { getRouteByName } from '@/lib/routes'
import { getServerUser } from '@/app/actions'
import { revalidatePath } from 'next/cache'
import { updateUser } from '@/lib/graphql/mutations/User'

export async function getUserProfile() {
  const sessionUser = await getServerUser()
  if (!sessionUser) {
    throw new Error('Not authenticated')
  }
  try {
    const response = await getProfile(sessionUser.id)
    const user: Session['internalUser'] = {
      name: response?.data?.attributes?.name ?? '',
      lastname: response?.data?.attributes?.lastname ?? '',
      birthdate: response?.data?.attributes?.birthdate ?? '',
      gender: response?.data?.attributes?.gender ?? '',
      avatar_url: response?.data?.attributes?.avatar_url ?? '',
      color: response?.data?.attributes?.color ?? '',
      locale: response?.data?.attributes?.locale ?? '',
    }

    return user
  } catch (error: any) {
    throw new Error('Error getting data.')
  }
}

export async function handleUserUpdate(data: UpdateUserFields) {
  const sessionUser = await getServerUser()
  if (!sessionUser) {
    throw new Error('Not authenticated')
  }
  try {
    await updateUser(sessionUser.id, data)
    revalidatePath(getRouteByName('profile').path)
  } catch (error) {
    throw new Error('Error saving data.')
  }
}
