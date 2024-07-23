import { PropsWithChildren } from 'react'


export interface BaseAppState {
  activeSection: string | null
}


export interface AppState {
  appState: BaseAppState
  updateState: ( newAppState: Partial<BaseAppState> ) => void
}


export interface RootLayoutProps extends PropsWithChildren {}


export interface NavLinkProps extends PropsWithChildren {
  target: string
  active?: boolean
  className?: string
}
