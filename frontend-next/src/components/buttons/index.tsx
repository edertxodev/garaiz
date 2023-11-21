import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import Link from 'next/link'

type LinkButtonProps = PropsWithChildren & {
  href: string
  className?: string
}

export function ActionLinkButton({ href, className, children }: LinkButtonProps) {
  return (
    <Link href={href} className={`custom-btn--action ${className}`}>
      {children}
    </Link>
  )
}

export function OutlineLinkButton({ href, className, children }: LinkButtonProps) {
  return (
    <Link href={href} className={`custom-btn--outline ${className}`}>
      {children}
    </Link>
  )
}

export function LinkButton({ href, className, children }: LinkButtonProps) {
  return (
    <Link href={href} className={`custom-btn--link ${className}`}>
      {children}
    </Link>
  )
}

type ButtonProps = ButtonHTMLAttributes<any> & {
  icon?: any
  full?: boolean
}

export function Button({ icon, full, className, children, ...restProps }: ButtonProps) {
  return (
    <button
      className={`custom-btn--primary ${full ? 'flex w-full items-center justify-center' : ''} ${className}`}
      {...restProps}
    >
      {icon ? <span className="mr-3">{icon}</span> : null}
      {children}
    </button>
  )
}
