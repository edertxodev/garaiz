import './globals.css'

import { PropsWithChildren } from 'react'
import { Providers } from '@/app/providers'
import { roboto } from '@/lib/fonts'
import Header from '@/components/layout/header/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Garaiz',
    default: 'Garaiz',
  },
  description: 'Garaiz application',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased h-screen bg-primary`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
