'use client'

import { ActionLinkButton, Button } from '@/components/buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { getRouteByName, routes } from '@/lib/routes'
import { roboto } from '@/lib/fonts'
import { signOut, useSession } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import HeaderLink from '@/components/layout/header/HeaderLink'
import LoggedDropdown from '@/components/layout/header/LoggedDropdown'
import Sidevar from '@/components/layout/header/Sidevar'
import ThemeToggle from '@/components/layout/header/ThemeToggle'
import clsx from 'clsx'
import useScroll from '@/lib/hooks/useScroll'

export default function Header() {
  const { y: scrollY } = useScroll()
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const { status: sessionStatus } = useSession()

  useEffect(() => {
    setScrolled(scrollY > 0)
  }, [scrollY])

  const handleMobileMenuOpening = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen)
  }, [mobileMenuOpen])

  return (
    <header className={clsx('fixed inset-x-0 top-0 z-50', { 'shadow bg-white/80 dark:bg-blue-950/80': !!scrolled })}>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <HeaderLink href={getRouteByName('home').path} className="-m-1.5 p-1.5">
            <span className={`${roboto.className} text-4xl`}>Garaiz</span>
          </HeaderLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
            onClick={handleMobileMenuOpening}
          >
            <FontAwesomeIcon icon={faBars} size="xl" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {routes.map((route) =>
            !['home', 'login', 'signup'].includes(route.name) ? (
              <HeaderLink key={route.name} href={route.path}>
                {route.name}
              </HeaderLink>
            ) : null
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
          {sessionStatus === 'authenticated' ? (
            // <Button onClick={() => signOut({ callbackUrl: getRouteByName('login').path })} className="!mb-0">
            //   Log out
            // </Button>
            <LoggedDropdown />
          ) : (
            <ActionLinkButton href={getRouteByName('login').path} className="!mb-0">
              Log in
            </ActionLinkButton>
          )}
        </div>
      </nav>
      <Sidevar opened={mobileMenuOpen} setOpened={handleMobileMenuOpening} />
    </header>
  )
}
