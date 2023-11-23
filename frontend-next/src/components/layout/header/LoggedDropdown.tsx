import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { getFullName } from '@/lib/utils'
import { getRouteByName } from '@/lib/routes'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export default function LoggedDropdown() {
  const { data: sessionData } = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={sessionData?.internalUser?.avatar_url ?? sessionData?.user?.image ?? ''}
          alt="Profile picture"
          width={42}
          height={42}
          className="rounded-full shadow-md hover:cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        <DropdownMenuLabel>{getFullName(sessionData?.internalUser) ?? sessionData?.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={getRouteByName('profile').path}>
            <DropdownMenuItem>
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: getRouteByName('login').path })}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-2" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
