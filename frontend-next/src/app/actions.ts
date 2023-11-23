import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

/**
 * Get Server Side internal user data
 */
export async function getServerUser() {
  const session = await getServerSession(authOptions)

  return session?.internalUser
}
