import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { PropsWithChildren } from 'react'
import { Providers } from '@/app/providers'
import { config } from '@fortawesome/fontawesome-svg-core'
import { roboto } from '@/lib/fonts'
import Header from '@/components/layout/header/Header'
import type { Metadata } from 'next'

config.autoAddCss = false

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
      <body className={`${roboto.className} antialiased h-screen bg-white dark:bg-slate-900`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
