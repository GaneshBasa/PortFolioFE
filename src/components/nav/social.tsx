import { FC } from 'react'

import { GitHubLogoIcon } from '@radix-ui/react-icons'

import { Button } from '@ui/button'
import { ThemeCustomizer } from '@components/theme-customizer'


const SocialNav : FC = () => (
  <>
    {/* GitHub Link */}
    <Button variant='outline' size='icon' className='bg-transparent'>
      <GitHubLogoIcon className='absolute h-[1.2rem] w-[1.2rem] transition-all' />
    </Button>

    {/* <ModeToggle /> */}

    <ThemeCustomizer />
  </>
)


export default SocialNav
