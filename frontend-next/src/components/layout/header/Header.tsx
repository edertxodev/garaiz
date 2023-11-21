'use client'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { getRouteByName, routes } from '@/lib/routes'
import { roboto } from '@/lib/fonts'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import HeaderLink from '@/components/layout/header/HeaderLink'
import Link from 'next/link'
import LoggedDropdown from '@/components/layout/header/LoggedDropdown'
import Sidevar from '@/components/layout/header/Sidevar'
import ThemeToggle from '@/components/layout/header/ThemeToggle'
import clsx from 'clsx'
import useScroll from '@/lib/hooks/useScroll'

export default function Header() {
  const { y: scrollY } = useScroll()
  const [scrolled, setScrolled] = useState<boolean>(false)
  const { status: sessionStatus } = useSession()

  useEffect(() => {
    setScrolled(scrollY > 0)
  }, [scrollY])

  return (
    <header className={clsx('fixed inset-x-0 top-0 z-50', { 'shadow bg-white/80 dark:bg-slate-950/80': !!scrolled })}>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <HeaderLink href={getRouteByName('home').path} className="-m-1.5 p-1.5">
            <span className={`${roboto.className} text-4xl`}>Garaiz</span>
          </HeaderLink>
        </div>
        <Sidevar />
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {routes.map((route) =>
              !['home', 'login'].includes(route.name) ? (
                <NavigationMenuItem key={route.name}>
                  <Link href={route.path} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{route.name}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ) : null
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle className="mr-2" />
          {sessionStatus === 'authenticated' ? (
            <LoggedDropdown />
          ) : (
            <Button variant="secondary" asChild>
              <Link href={getRouteByName('login').path}>Log in</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  )
}
