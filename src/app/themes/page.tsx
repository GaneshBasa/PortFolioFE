import { Metadata } from 'next'

import '@styles/themes.css'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@components/page-header'
import { ThemeCustomizer } from '@components/theme-customizer'
import { ThemesTabs } from '@app/themes/tabs'

export const metadata: Metadata = {
  title: 'Themes',
  description: 'Hand-picked themes that you can copy and paste into your apps.',
}

export default function ThemesPage() {
  return (
    <div className='container my-14'>
      <div className='relative flex w-full flex-col items-start md:flex-row'>
        <PageHeader className='w-full'>
          <PageHeaderHeading className='hidden md:block'>
            Add colors. Make it yours.
          </PageHeaderHeading>
          <PageHeaderHeading className='md:hidden'>
            Make it yours
          </PageHeaderHeading>
          <PageHeaderDescription>
            Hand-picked themes that you can copy and paste into your apps.
          </PageHeaderDescription>
          <PageActions>
            {/* <ThemeCustomizer /> */}
          </PageActions>
        </PageHeader>
      </div>
      <ThemesTabs />
    </div>
  )
}
