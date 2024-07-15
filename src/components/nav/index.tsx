import { FC } from 'react'

import DesktopNav from '@src/components/nav/desktop'
import MobileNav from '@src/components/nav/mobile'
import SocialNav from '@src/components/nav/social'


const Nav : FC = () => {
  return (
    <>
      <nav className='flex items-center justify-between h-14'>

        <div className='flex'>
          <DesktopNav />
          <MobileNav />
        </div>

        <div className='flex items-center'>
          <SocialNav />
        </div>
        
      </nav>
    </>
  )
}


export default Nav
