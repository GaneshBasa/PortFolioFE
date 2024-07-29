import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { themes, Theme } from '@common/themes'

const configAtom = atomWithStorage<Theme>( 'color', themes[ 0 ] )

export const useColor = () => useAtom( configAtom )
