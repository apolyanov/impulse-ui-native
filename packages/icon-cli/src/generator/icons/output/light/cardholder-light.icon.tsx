import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const CardholderLightIcon = memo(function CardholderLight(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M208,50H48A22,22,0,0,0,26,72V184a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V72A22,22,0,0,0,208,50ZM38,94H218v20H160a6,6,0,0,0-6,6,26,26,0,0,1-52,0,6,6,0,0,0-6-6H38ZM48,62H208a10,10,0,0,1,10,10V82H38V72A10,10,0,0,1,48,62ZM208,194H48a10,10,0,0,1-10-10V126H90.47a38,38,0,0,0,75.06,0H218v58A10,10,0,0,1,208,194Z"
 /></Svg>
  )
    })
