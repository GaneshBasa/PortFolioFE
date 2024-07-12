'use client'


import { FC } from 'react'
import { Moon, Sun, MonitorCog } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu'


export const ModeToggle : FC = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>

        {/* NOTE: Can Change Variant & Other Params here */}
        <Button variant='outline' size='icon'>

          <Sun className='absolute h-[1.2rem] w-[1.2rem] transition-all scale-100 dark:scale-0' />

          <Moon className='absolute h-[1.2rem] w-[1.2rem] transition-all scale-0 dark:scale-100' />

          <span className='sr-only'>Toggle Theme</span>

        </Button>

      </DropdownMenuTrigger>

      <DropdownMenuContent align='center' className='min-w-fit'>

        <DropdownMenuItem onClick={ () => setTheme( 'light' ) }>
          <Sun className='mr-2 h-4 w-4' />
          <span>
            Light
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={ () => setTheme( 'dark' ) }>
          <Moon className='mr-2 h-4 w-4' />
          <span>
            Dark
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={ () => setTheme( 'system' ) }>
          <MonitorCog className='mr-2 h-4 w-4' />
          <span>
            System
          </span>
        </DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>
  )
}
