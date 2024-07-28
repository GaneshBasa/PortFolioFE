'use client'

import { FC, useContext, useEffect, useRef } from 'react'
import { sections } from '@common/data'
import { AppStateContext } from '@context/app-state-provider'


const ioOptions : IntersectionObserverInit = {
  threshold : 0.6
}


const RootPage : FC = () => {
  const { updateState } = useContext( AppStateContext )

  const sectionsRef = useRef < ( HTMLElement | null ) [] > ( [] )

  const addSectionRef = ( sectionRef : HTMLElement | null ) => { if ( sectionRef ) sectionsRef.current.push( sectionRef ) }

  const changeHash = ( hash : string ) => {
    const location = window.location.toString().split( '#' )[ 0 ]
    const oldHash = window.location.hash

    if ( hash ) {
      const newHash = `#${ hash }`
  
      if ( newHash != oldHash ) {
        updateState( { activeSection: hash } )
        history.replaceState( null, '', location + newHash )
      }
    } else {
      updateState( { activeSection: null } )
      history.replaceState( null, '', location )
    }

  }

  const ioHandler : IntersectionObserverCallback = ( entries : IntersectionObserverEntry [] ) => {
    entries.forEach( entry => {
      if ( entry.isIntersecting ) changeHash( entry.target.id )
    } )
  }

  useEffect( () => {
    if ( sectionsRef.current.length ) {
      const iObserver = new IntersectionObserver( ioHandler, ioOptions )
      sectionsRef.current.forEach( sectionRef => iObserver.observe( sectionRef as Element ) )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] )

  return (
    <>

      <section className='flex min-h-screen' ref={ addSectionRef }>
        <div className='text-center m-auto'>
          <h1 className='text-5xl font-extrabold text-primary'>
            Hello, World!
          </h1>
        </div>
      </section>

      {
        sections.map( ( section, index ) => (
          <section
            key={ index }
            id={ section.toLowerCase() }
            ref={ addSectionRef }
            className='flex min-h-screen'
          >
            <div className='text-center m-auto'>
              <h1 className='text-5xl font-extrabold'>
                Section { section }
              </h1>
            </div>
          </section>
        ) )
      }
      
    </>
  )
}


export default RootPage
