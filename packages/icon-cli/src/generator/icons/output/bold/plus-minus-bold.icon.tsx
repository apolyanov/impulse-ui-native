import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const PlusMinusBoldIcon = memo(function PlusMinusBold(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M208.49,64.49l-144,144a12,12,0,0,1-17-17l144-144a12,12,0,0,1,17,17ZM60,112a12,12,0,0,0,24,0V84h28a12,12,0,0,0,0-24H84V32a12,12,0,0,0-24,0V60H32a12,12,0,0,0,0,24H60Zm164,60H144a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24Z"
 /></Svg>
  )
    })
