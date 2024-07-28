'use client'

import { cn } from '@lib/utils'
import { useColor } from '@hooks/use-color'

interface ThemeWrapperProps extends React.ComponentProps<'div'> {
  defaultTheme?: string
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const [ color ] = useColor()

  return (
    <div
      className={
        cn(
          `theme-${ defaultTheme || color }`,
          'w-full',
          className
        )
      }
    >
      {children}
    </div>
  )
}
