import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const PlusBoldIcon = memo(function PlusBold(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"
 /></Svg>
  )
    })
