import { FC } from 'react'

import Nav from '@components/nav'


const SiteHeader : FC = () => (
  <header className='fixed top-0 w-full z-50 px-[5vw] border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
    <Nav />
  </header>
)


export default SiteHeader
