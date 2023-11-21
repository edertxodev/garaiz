import { PropsWithChildren } from 'react'
import Link from 'next/link'

type HeaderLinkProps = PropsWithChildren & {
  href: string
  className?: string
}

export default function HeaderLink({ href, className, children }: HeaderLinkProps) {
  return (
    <Link
      href={href}
      className={`text-sm font-bold leading-6 text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 ${
        className ?? ''
      }`}
    >
      {children}
    </Link>
  )
}
