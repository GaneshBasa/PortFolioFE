import { FC } from 'react'

import { Button } from '@ui/button'
import { ModeToggle } from '@components/mode-toggle'


const RootPage : FC = () => (
  <main className='flex min-h-dvh'>
    <div className='text-center m-auto'>
      <h1 className='text-5xl font-extrabold'>
        Hello, World!
      </h1>
      <Button className='m-5'>
        Click Me!
      </Button>
      <div>
        <ModeToggle />
      </div>
    </div>
  </main>
)


export default RootPage
