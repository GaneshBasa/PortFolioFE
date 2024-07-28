import { FC } from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { ThemeCustomizer } from '@components/theme-customizer'
import { linkedin, github } from '@common/profile'
import { SocialLink } from '@nav/link'


const SocialNav : FC = () => (
  <>
    {/* LinkedIn */}
    <SocialLink target={ linkedin.link } name='LinkedIn'>
      <LinkedInLogoIcon className='size-6' />
    </SocialLink>

    {/* GitHub */}
    <SocialLink target={ github.link } name='GitHub'>
      <GitHubLogoIcon className='size-6' />
    </SocialLink>

    {/* Theme */}
    <ThemeCustomizer />
  </>
)


export default SocialNav
