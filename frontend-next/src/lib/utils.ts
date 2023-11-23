import { type ClassValue, clsx } from 'clsx'
import { Session } from 'next-auth'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFullName(user: Session['internalUser']) {
  if (!user?.name && !user?.lastname) return undefined

  return `${user.name} ${user.lastname}`
}
