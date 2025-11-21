import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const BowlingBallRegularIcon = memo(function BowlingBallRegular(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-100a12,12,0,1,1-12-12A12,12,0,0,1,144,116Zm20-12a12,12,0,1,1,12-12A12,12,0,0,1,164,104Zm20,28a12,12,0,1,1-12-12A12,12,0,0,1,184,132Z"
 /></Svg>
  )
    })
