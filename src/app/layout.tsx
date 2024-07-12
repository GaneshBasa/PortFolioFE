import { FC } from 'react'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import '@styles/globals.css'

import { cn } from '@lib/utils'
import { name } from '@common/data'
import type { RootLayoutProps } from '@common/interfaces'
import { ThemeProvider } from '@context/theme-provider'


const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})


export const metadata : Metadata = {
  title: name,
  description: `${name}\' Portfolio`,
}


const RootLayout : FC<RootLayoutProps> = ({ children }) => (
  <html lang='en' suppressHydrationWarning>
    <body
      className={ cn(
        'min-h-dvh bg-background font-sans antialiased',
        fontSans.variable
      ) }
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
  </html>
)


export default RootLayout
