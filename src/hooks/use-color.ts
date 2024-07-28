import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const configAtom = atomWithStorage( 'color', 'zinc' )

export const useColor = () => useAtom( configAtom )
