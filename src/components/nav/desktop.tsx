'use client'

import { FC } from 'react'
import { NavLogo, NavLinks } from '@nav/link'


const DesktopNav : FC = () => (
  <div className='hidden md:flex'>

    <NavLogo />

    <div className='flex items-center gap-4 text-sm lg:gap-6'>
      <NavLinks />
    </div>

  </div>
)


export default DesktopNav
