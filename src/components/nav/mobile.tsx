'use client'

import { FC } from 'react'
import { Button } from '@ui/button'
import { ScrollArea } from '@ui/scroll-area'
import { NavLogo, NavLinks } from '@nav/link'
import Trigger from '@assets/trigger.svg'

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetHeader
} from '@ui/sheet'


const MobileNav : FC = () => (
  <Sheet>

    <SheetTrigger asChild>
      <Button
        variant='ghost'
        className='text-base bg-transparent md:hidden'
      >
        <Trigger name='trigger' width={20} height={20} />
        <span className='sr-only'>Toggle Menu</span>
      </Button>
    </SheetTrigger>

    <SheetContent side='top'>

      <SheetHeader>
        <SheetTitle />
        <SheetDescription />
      </SheetHeader>

      <div className='m-auto max-w-fit'>
        <NavLogo />
        <ScrollArea className='my-4 pl-12 max-w-fit'>
          <div className='flex flex-col space-y-3'>
            <NavLinks />
          </div>
        </ScrollArea>
      </div>

    </SheetContent>

  </Sheet>
)


export default MobileNav
