const hsl = ( hue: number, saturation: number, lightness: number ) => `hsl( ${ hue }, ${ saturation }%, ${ lightness }% )`

export const themes = [
  {
    name: 'grey',
    label: 'Grey',
    activeColor: {
      light: hsl( 220, 8.9, 46.1 ),
      dark: hsl( 215, 13.8, 34.1 )
    }
  },
  {
    name: 'neutral',
    label: 'Neutral',
    activeColor: {
      light: hsl( 0, 0, 45.1 ),
      dark: hsl( 0, 0, 32.2 )
    }
  },
  {
    name: 'red',
    label: 'Red',
    activeColor: {
      light: hsl( 0, 72.2, 50.6 ),
      dark: hsl( 0, 72.2, 50.6 )
    }
  },
  {
    name: 'rose',
    label: 'Rose',
    activeColor: {
      light: hsl( 346.8, 77.2, 49.8 ),
      dark: hsl( 346.8, 77.2, 49.8 )
    }
  },
  {
    name: 'orange',
    label: 'Orange',
    activeColor: {
      light: hsl( 24.6, 95, 53.1 ),
      dark: hsl( 20.5, 90.2, 48.2 )
    }
  },
  {
    name: 'green',
    label: 'Green',
    activeColor: {
      light: hsl( 142.1, 76.2, 36.3 ),
      dark: hsl( 142.1, 70.6, 45.3 )
    }
  },
  {
    name: 'blue',
    label: 'Blue',
    activeColor: {
      light: hsl( 221.2, 83.2, 53.3 ),
      dark: hsl( 217.2, 91.2, 59.8 )
    }
  },
  {
    name: 'yellow',
    label: 'Yellow',
    activeColor: {
      light: hsl( 47.9, 95.8, 53.1 ),
      dark: hsl( 47.9, 95.8, 53.1 )
    }
  },
  {
    name: 'violet',
    label: 'Violet',
    activeColor: {
      light: hsl( 262.1, 83.3, 57.8 ),
      dark: hsl( 263.4, 70, 50.4 )
    }
  }
] as const

export type Theme = ( typeof themes ) [ number ]
