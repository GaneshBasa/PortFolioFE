import { FC } from 'react'
import { useTheme } from 'next-themes'

import { projects } from '@common/data'

import Project from '@components/project'


const Projects : FC = () => {
  const { resolvedTheme: mode } = useTheme()
  
  return (
    <>
    {
      projects.map( ( project, index ) => (
        <Project { ...project } mode={ mode } key={ index  } />
      ) )
    }
    </>
  )
}


export default Projects
