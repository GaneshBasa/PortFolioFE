import { FC, MouseEventHandler, useContext } from 'react'
import Link from 'next/link'

import { VercelLogoIcon } from '@radix-ui/react-icons'

import { name, sections } from '@common/data'
import type { NavLinkProps } from '@common/interfaces'
import { AppStateContext } from '@context/app-state-provider'
import { cn } from '@lib/utils'


const linkHandler : MouseEventHandler<HTMLAnchorElement> | undefined = ( event ) => {
  event.preventDefault()

  const target = document.getElementById( event.currentTarget.target )

  target
  ?
  target.scrollIntoView( { behavior: 'smooth' } )
  :
  window.scrollTo( { top: 0, behavior: 'smooth' } )
}


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
      active ? 'text-foreground' : 'text-muted-foreground'
    ) }
  >
    { children }
  </Link>
)


export const NavLinks : FC = () => {
  const { appState, updateState } = useContext( AppStateContext )
  
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
    className='flex items-center max-w-fit md:space-x-2 md:mr-4 lg:mr-6'
  >
    <VercelLogoIcon className='mr-2 transition-all' />
    <span className='font-bold md:hidden lg:inline-block' >
      { name }
    </span>
  </NavLink>
)
