import { FC } from 'react'

import Screen from '@components/screen'

// import iris from '@projects/iris'

import iris_light from '@projects/iris/light.png'
import iris_dark from '@projects/iris/dark.png'
import {  ProjectProps } from '@common/interfaces'


const Project : FC < ProjectProps > = ({ name, label, description, mode }) => (
  <div className='m-auto text-center flex flex-col space-y-1'>

    <div>
      NAME : { name }
    </div>

    <div>
      LABEL : { label }
    </div>

    <div>
      DESCRIPTION : { description }
    </div>

    <Screen
      mode={ mode }
      name={ name }
      src={ iris_dark }
      alt='Image'
    />
    
  </div>
)


export default Project
