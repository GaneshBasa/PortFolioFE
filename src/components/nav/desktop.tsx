'use client'

import { FC } from 'react'
import { NavLogo, NavLinks } from '@nav/link'


const DesktopNav : FC = () => (
  <div className='hidden md:flex items-center gap-2 md:gap-4 lg:gap-6 text-sm'>
    <NavLogo />
    <NavLinks />
  </div>
)


export default DesktopNav
