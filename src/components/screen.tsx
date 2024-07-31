import { FC } from 'react'
import Image from 'next/image'

import { ScreenProps } from '@common/interfaces'


const Screen : FC < ScreenProps > = ({ mode, name, src, alt }) => (
  <div className='m-auto w-2/3 rounded-3xl border border-ring bg-muted p-5'>
    <Image
      src={ src }
      alt={ alt }
      className='border rounded-xl'
    />
  </div>
)


export default Screen
