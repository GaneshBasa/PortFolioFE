import { FC } from 'react'

import DesktopNav from '@nav/desktop'
import MobileNav from '@nav/mobile'
import SocialNav from '@nav/social'


const Nav : FC = () => (
    <nav className='flex items-center justify-between h-14'>
      <div>
        <DesktopNav />
        <MobileNav />
      </div>
      <SocialNav />
    </nav>
  )


export default Nav
