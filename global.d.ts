// Allow TypeScript to import SVG files using Webpack's `svgr` loader

declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  
  const content : FC < SVGProps < SVGElement > >

  export default content
}
