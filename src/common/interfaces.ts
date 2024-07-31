import { StaticImageData } from 'next/image'
import { FC, PropsWithChildren } from 'react'


export interface BaseAppState {
  activeSection: string | null
}


export interface AppState {
  appState: BaseAppState
  updateState: ( newAppState: Partial<BaseAppState> ) => void
}


export interface RootLayoutProps extends PropsWithChildren {}


export interface SocialLinkProps extends PropsWithChildren {
  target: string
  name: string
  className?: string
}


export interface NavLinkProps extends PropsWithChildren {
  target: string
  active?: boolean
  className?: string
}


export interface ScreenProps {
  mode?: string
  name?: string
  src: StaticImageData
  alt: string
}


export interface Label {
  name: string
  label: string
}


export interface Section extends Label {
  component?: FC
}


export interface Project extends Label {
  description?: string
}


export interface ProjectProps extends Project {
  mode?: string
}
