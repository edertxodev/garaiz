import { Button } from '@/components/ui/button'
import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export type ProfileSidenavItem = {
  href: string
  title: string
}

type ProfileSidenavProps = {
  items: ProfileSidenavItem[]
} & HTMLAttributes<HTMLElement>

export default function ProfileSidenav({ className, items, ...props }: ProfileSidenavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)} {...props}>
      {items.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          className={cn(
            '!justify-start',
            cn(pathname === item.href ? 'bg-slate-100 dark:bg-slate-800' : 'hover:bg-transparent')
          )}
          asChild
        >
          <Link href={item.href}>{item.title}</Link>
        </Button>
      ))}
    </nav>
  )
}
