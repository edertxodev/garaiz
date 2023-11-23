'use client'

import { Card, CardContent } from '@/components/ui/card'
import { PropsWithChildren } from 'react'
import { getRouteByName } from '@/lib/routes'
import ProfileSidenav, { ProfileSidenavItem } from '@/components/profile/ProfileSidenav'

const sidebarNavItems: ProfileSidenavItem[] = [
  {
    title: 'Profile',
    href: getRouteByName('profile').path,
  },
]

export default function UserLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-2 lg:space-y-0 py-32 px-24">
      <aside className="lg:w-1/5">
        <Card>
          <CardContent className="pt-6">
            <ProfileSidenav items={sidebarNavItems} />
          </CardContent>
        </Card>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  )
}
