'use client'

import { PropsWithChildren } from 'react'
import { SessionProvider, SessionProviderProps } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

export function Providers({ children, session }: PropsWithChildren & SessionProviderProps) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={session}>{children}</SessionProvider>
    </ThemeProvider>
  )
}
