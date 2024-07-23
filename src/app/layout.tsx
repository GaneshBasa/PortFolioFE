import { FC } from 'react'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import '@styles/globals.css'

import { cn } from '@lib/utils'
import { name } from '@common/data'
import type { RootLayoutProps } from '@common/interfaces'
import { ThemeProvider } from '@context/theme-provider'
import { AppStateProvider } from '@context/app-state-provider'
import { ThemeWrapper } from '@components/theme-wrapper'
import SiteHeader from '@components/site-header'
// import SiteFooter from '@components/site-footer'


const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})


export const metadata : Metadata = {
  title: name,
  description: `${ name }\'${ name.endsWith( 's' ) ? '' : 's' } Portfolio`,
}


const RootLayout : FC<RootLayoutProps> = ({ children }) => (
  <html lang='en' suppressHydrationWarning>
    <head>
      <link rel='apple-touch-icon' sizes='180x180' href='apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='favicon-16x16.png' />
      <link rel='manifest' href='site.webmanifest' />
    </head>
    <body
      className={ cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable
      ) }
    >
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <AppStateProvider>
          <ThemeWrapper>
            <SiteHeader />

            <main className='min-h-screen flex-1'>
              {children}
            </main>

            {/* <SiteFooter /> */}
          </ThemeWrapper>
        </AppStateProvider>
      </ThemeProvider>
    </body>
  </html>
)


export default RootLayout
