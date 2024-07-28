import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const configAtom = atomWithStorage( 'color', 'neutral' )

export const useColor = () => useAtom( configAtom )
