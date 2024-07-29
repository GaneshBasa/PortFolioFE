
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
  'Lime',
  'Aqua',
  'Emerald',
  'Gold',
] as const

export type Theme = ( typeof themes ) [ number ]
