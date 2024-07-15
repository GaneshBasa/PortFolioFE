'use client'


import { FC, PropsWithChildren, createContext, useEffect, useState } from 'react'
import { BaseAppState, AppState } from '@common/interfaces'


const defaultBaseAppState : BaseAppState = {
  activeSection: null
}


const defaultAppState : AppState = {
  appState: defaultBaseAppState,
  updateState: ( newAppState: Partial<BaseAppState> ) => {}
}


export const AppStateContext = createContext < AppState > ( defaultAppState )


export const AppStateProvider : FC< PropsWithChildren > = ({ children }) => {
  const [ appState, setAppState ] = useState < BaseAppState > ( defaultBaseAppState )

  // useEffect( () => console.log( appState ), [ appState ] )

  const updateState = ( newAppState : Partial<BaseAppState> ) => setAppState( oldAppState => ({ ...oldAppState, ...newAppState }) )

  return (
    <AppStateContext.Provider value={{ appState, updateState }}>
      { children }
    </AppStateContext.Provider>
  )
}
