
export const themes = [
  'Neutral',
  'Slate',
  'Stone',
  'Tan',
  'Khaki',
  'Bisque',
  'Rose',
  'Coral',
  'Salmon',
  'Peach',
  'Orchid',
  'Rebecca',
  'Royal',
  'Lavender',
  'Midnight',
  'Gold',
  'Lime',
  'Aqua',
  'Amber',
  'Amethyst',
  'Emerald',
] as const

export type Theme = ( typeof themes ) [ number ]
