
export const themes = [
  'Neutral',
  'Slate',
  'Stone',
  'Gold',
  'Tan',
  'Khaki',
  'Bisque',
  'Rose',
  'Coral',
  'Salmon',
  'Peach',
  'Orchid',
  'Rebecca',
  'Lime',
  'Aqua',
  'Emerald',
  'Royal',
  'Lavender',
  'Midnight',
] as const

export type Theme = ( typeof themes ) [ number ]
