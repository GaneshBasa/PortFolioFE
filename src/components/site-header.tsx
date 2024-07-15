import { FC } from 'react'

import Nav from '@components/nav'


const SiteHeader : FC = () => (
  <header className='fixed w-full z-50 px-[5vw] backdrop-blur'>
    <Nav />
  </header>
)


export default SiteHeader
