import { Project, Section } from '@common/interfaces'

import { About, Projects } from '@components/section'


export const sections : Section [] = [
  {
    name: 'about',
    label: 'About',
    component: About
  },
  {
    name: 'projects',
    label: 'Projects',
    component: Projects
  }
]

export const projects : Project [] = [
  {
    name: 'iris',
    label: 'Iris',
    description: 'Video Conferencing App'
  },
  {
    name: 'hangman',
    label: 'HangMan',
    description: 'HangMan - Word Guessing Game'
  }
]
