import { FC } from 'react'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import '@styles/globals.css'

import { name } from '@common/data'
import type { RootLayoutProps } from '@common/interfaces'


const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})


export const metadata : Metadata = {
  title: name,
  description: `${name}\' Portfolio`,
}


const RootLayout : FC<RootLayoutProps> = ({ children }) => (
  <html lang='en'>
    <body className={ fontSans.variable }>
      {children}
    </body>
  </html>
)


export default RootLayout
