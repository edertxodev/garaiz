import { getUserProfile } from '@/app/user/profile/actions'
import ProfileForm from '@/components/user/profile/ProfileForm'

export default async function ProfilePage() {
  const backendUser = await getUserProfile()

  return <ProfileForm user={backendUser} />
}
