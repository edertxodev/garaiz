'use client'

import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { routes } from '@/lib/routes'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import LoggedDropdown from '@/components/layout/header/LoggedDropdown'
import ThemeToggle from '@/components/layout/header/ThemeToggle'

export default function Sidevar() {
  const { data: sessionData, status: sessionStatus } = useSession()

  return (
    <Sheet>
      <SheetTrigger className="flex lg:hidden" asChild>
        <Button variant="ghost">
          <FontAwesomeIcon icon={faBars} size="xl" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col min-h-screen">
        <SheetHeader className="!block !text-left">
          <ThemeToggle />
        </SheetHeader>
        <div className="flex flex-col">
          {routes.map((route) =>
            !['login'].includes(route.name) ? (
              <Link
                key={route.name}
                href={route.path}
                className="py-4 px-2 hover:bg-slate-100/80 hover:dark:bg-slate-800 rounded-lg"
              >
                {route.name}
              </Link>
            ) : null
          )}
        </div>

        <SheetFooter className="mt-auto !flex-col">
          <Separator className="mb-8" />
          <div className="flex">
            {sessionStatus === 'authenticated' ? (
              <>
                <LoggedDropdown />
                <span className="ml-4 mt-2">Hi {sessionData.user?.name?.split(' ')?.[0]}!</span>
              </>
            ) : (
              <Button variant="secondary" width="full">
                Log in
              </Button>
            )}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
