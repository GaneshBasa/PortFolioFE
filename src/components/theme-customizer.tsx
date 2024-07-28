'use client'

import { useState, useEffect, CSSProperties, FC } from 'react'
import { useTheme } from 'next-themes'
import { Cog as Trigger, Moon, Sun, MonitorCog, Undo2 as Reset, Check } from 'lucide-react'
import { cn } from '@lib/utils'
import { useColor } from '@hooks/use-color'
import { ThemeWrapper } from '@components/theme-wrapper'
import { Button } from '@components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@components/ui/drawer'
import { Label } from '@components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/ui/popover'
import { themes } from '@common/themes'

import '@styles/mdx.css'


export const ThemeCustomizer : FC = () => {
  const [ mobile, setMobile ] = useState < boolean > ()

  const deviceTest = ( event : MediaQueryListEvent ) =>  setMobile( event.matches )

  useEffect( () => {
    const MQL = window.matchMedia( '(max-width: 768px)' )

    setMobile( MQL.matches )

    MQL.addEventListener( 'change', deviceTest )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] )


  return (
    <>
    {
      mobile
      ?
      <Drawer>

        <DrawerTrigger asChild>
          <Button variant='ghost' size='icon' className='bg-transparent'>
            <Trigger />
          </Button>
        </DrawerTrigger>

        <DrawerContent className='p-6'>

          <DrawerHeader>
            <DrawerTitle />
            <DrawerDescription />
          </DrawerHeader>

          <Customizer />

        </DrawerContent>

      </Drawer>
      :
      <Popover>

        <PopoverTrigger asChild>
          <Button variant='ghost' size='icon' className='bg-transparent'>
            <Trigger />
          </Button>
        </PopoverTrigger>

        <PopoverContent className='p-6 rounded-xl min-w-max'>

          <Customizer />

        </PopoverContent>

      </Popover>
    }
    </>
  )
}


const Customizer : FC = () => {
  const { theme: mode, setTheme: setMode } = useTheme()
  const [ color, setColor ] = useColor()

  return (
    <ThemeWrapper className='space-y-4' >

      <div className='flex justify-between'>

        <div>
          <div className='font-semibold'>
            Customize
          </div>
          <div className='text-xs text-muted-foreground'>
            Pick a style and color for your components.
          </div>
        </div>

        <Button
          variant='ghost'
          size='icon'
          className='bg-transparent'
          onClick={ () => setColor( 'zinc' ) }
        >
          <Reset />
          <span className='sr-only'>Reset</span>
        </Button>

      </div>

      <div className='space-y-1.5'>

        <Label>Mode</Label>

        <div className='grid grid-cols-3 gap-2'>

          <Button
            variant='outline'
            size='sm'
            onClick={ () => setMode( 'light' ) }
            className={ mode == 'light' ? 'border-2 border-primary' : '' }
          >
            <Sun className='mr-2' />
            Light
          </Button>

          <Button
            variant='outline'
            size='sm'
            onClick={ () => setMode( 'system' ) }
            className={ mode == 'system' ? 'border-2 border-primary' : '' }
          >
            <MonitorCog className='mr-2' />
            System
          </Button>

          <Button
            variant='outline'
            size='sm'
            onClick={ () => setMode( 'dark' ) }
            className={ mode == 'dark' ? 'border-2 border-primary' : '' }
          >
            <Moon className='mr-2' />
            Dark
          </Button>

        </div>
        
      </div>

      <div className='space-y-1.5'>

        <Label>Color</Label>

        <div className='grid grid-cols-3 gap-2'>
        {
          themes.map( theme => (
            <Button
              variant='outline'
              size='sm'
              key={ theme.name }
              onClick={ () => setColor( theme.name ) }
              style={ { '--theme-primary': `hsl( ${ theme?.activeColor[ mode == 'dark' ? 'dark' : 'light' ] } )` } as CSSProperties }
              className={ cn(
                'px-[5vw] md:px-[1vw] justify-start',
                color == theme.name && 'border-2 border-primary'
              ) }
            >
              <span
                className={ cn(
                  'mr-2 h-5 w-5 flex items-center justify-center rounded-full bg-[--theme-primary]'
                ) }
              >
                { color == theme.name && <Check className='h-4 w-4 text-white' /> }
              </span>
              { theme.label }
            </Button>
          ) )
        }
        </div>
        
      </div>

    </ThemeWrapper>
  )
}
