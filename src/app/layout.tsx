import { FC } from 'react'
import type { Metadata } from 'next'
import type { RootLayoutProps } from '@common/interfaces'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { ThemeWrapper } from '@components/theme-wrapper'
import { AppStateProvider } from '@context/app-state-provider'
import { cn } from '@lib/utils'
import { name } from '@common/profile'
import SiteHeader from '@components/site-header'
import SiteFooter from '@components/site-footer'
import '@styles/globals.css'
import '@styles/themes.css'


const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})


export const metadata : Metadata = {
  title: name.full,
  description: `${ name.full }\'${ name.full.endsWith( 's' ) ? '' : 's' } Portfolio`,
}


const RootLayout : FC < RootLayoutProps > = ({ children }) => (
  <html lang='en' suppressHydrationWarning>
    <head>
      <meta name='theme-color' media='(prefers-color-scheme: light)' content='white'/>
      <meta name='theme-color' media='(prefers-color-scheme: dark)' content='black'/>
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
        storageKey='mode'
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <ThemeWrapper>
          <AppStateProvider>
            <SiteHeader />
            <main className='min-h-screen flex-1'>
              {children}
            </main>
            <SiteFooter />
          </AppStateProvider>
        </ThemeWrapper>
      </ThemeProvider>
    </body>
  </html>
)


export default RootLayout
