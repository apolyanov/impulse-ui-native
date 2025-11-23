import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const NewspaperLightIcon = memo(function NewspaperLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M182,112a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h80A6,6,0,0,1,182,112Zm-6,26H96a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12Zm54-74V184a22,22,0,0,1-22,22H32a22,22,0,0,1-22-21.91V88a6,6,0,0,1,12,0v96a10,10,0,0,0,20,0V64A14,14,0,0,1,56,50H216A14,14,0,0,1,230,64Zm-12,0a2,2,0,0,0-2-2H56a2,2,0,0,0-2,2V184a21.84,21.84,0,0,1-2.41,10H208a10,10,0,0,0,10-10Z"
 /></Svg>
  )
    })
