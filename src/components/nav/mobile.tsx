'use client'

import { FC, useState } from 'react'
import { Button } from '@ui/button'
import { ScrollArea } from '@ui/scroll-area'
import { NavLogo, NavLinks } from '@nav/link'

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@ui/sheet'


const MobileNav : FC = () => {
  const [open, setOpen] = useState( false )

  // useEffect( () => console.log( { open: open } ), [ open ] )

  return (
    <Sheet open={open} onOpenChange={setOpen}>

      <SheetTrigger asChild>

        <Button
          variant='ghost'
          className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        >
          <svg
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
          >
            <path
              d='M3 5H11'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M3 12H16'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M3 19H21'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
          <span className='sr-only'>Toggle Menu</span>
        </Button>

      </SheetTrigger>

      <SheetContent side='top' className='bg-background/50 backdrop-blur'>

        <div className='m-auto max-w-fit'>

          <NavLogo />

          <ScrollArea className='my-4 pl-6 max-w-fit'>
            <div className='flex flex-col space-y-3'>
              <NavLinks />
            </div>
          </ScrollArea>

        </div>

      </SheetContent>

    </Sheet>
  )
}


export default MobileNav
