import { FC, MouseEventHandler, useContext } from 'react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar'
import { sections } from '@common/data'
import { name } from '@common/profile'
import type { NavLinkProps, SocialLinkProps } from '@common/interfaces'
import { AppStateContext } from '@context/app-state-provider'
import { cn } from '@lib/utils'
import { buttonVariants } from '@ui/button'


const linkHandler : MouseEventHandler<HTMLAnchorElement> | undefined = ( event ) => {
  event.preventDefault()

  const target = document.getElementById( event.currentTarget.target )

  target
  ?
  target.scrollIntoView()
  :
  window.scrollTo( { top: 0 } )
}


export const SocialLink : FC<SocialLinkProps> = ({ target, name, className, children }) => (
  <Link href={ target } target='_blank'>
    <div
      className={ cn(
        buttonVariants({ variant: 'ghost', size: 'icon' }),
        'bg-transparent'
      ) }
    >
      { children }
      <span className='sr-only'>{ name }</span>
    </div>
  </Link>
)


const NavLink : FC<NavLinkProps> = ({ target, active, className, children }) => (
  <Link
    target={ target.toLowerCase() }
    href={ `#${target.toLowerCase()}` }
    onClick={ linkHandler }
    className={ 
      className
      ?
      className
      :
      cn(
      'transition-colors hover:text-primary',
      active ? 'text-primary' : 'text-muted-foreground'
    ) }
  >
    { children }
  </Link>
)


export const NavLinks : FC = () => {
  const { appState } = useContext( AppStateContext )
  
  return (
    <>
    {
      sections.map( ( section, index ) => (
        <NavLink
        key={ index }
        target={ section }
        active={ appState.activeSection == section.toLowerCase() }
        >
          { section }
        </NavLink>
      ) )
    }
    </>
  )
}


export const NavLogo : FC = () => (
  <NavLink
    target='/'
    className='flex items-center max-w-fit space-x-2 md:mr-4 lg:mr-6'
  >
    <Avatar>
      <AvatarImage src='https://github.com/GaneshBasa.png' />
      <AvatarFallback>GB</AvatarFallback>
    </Avatar>
    <span className='font-bold md:hidden lg:inline-block' >
      { name.full }
    </span>
  </NavLink>
)
