import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const TextHThreeBoldIcon = memo(function TextHThreeBold(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M252,180a40,40,0,0,1-68.57,28,12,12,0,1,1,17.14-16.79A16,16,0,1,0,212,164a12,12,0,0,1-9.83-18.88L217,124H192a12,12,0,0,1,0-24h48a12,12,0,0,1,9.83,18.88l-18.34,26.2A40,40,0,0,1,252,180ZM144,44a12,12,0,0,0-12,12v48H52V56a12,12,0,0,0-24,0V176a12,12,0,0,0,24,0V128h80v48a12,12,0,0,0,24,0V56A12,12,0,0,0,144,44Z"
 /></Svg>
  )
    })
