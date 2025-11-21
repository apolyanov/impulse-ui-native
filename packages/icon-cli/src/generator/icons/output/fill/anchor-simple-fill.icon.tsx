import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const AnchorSimpleFillIcon = memo(function AnchorSimpleFill(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M232,120a104,104,0,0,1-208,0,8,8,0,0,1,8-8H56a8,8,0,0,1,0,16H40.36A88.15,88.15,0,0,0,120,207.63V90.83a28,28,0,1,1,16,0v116.8A88.15,88.15,0,0,0,215.64,128H200a8,8,0,0,1,0-16h24A8,8,0,0,1,232,120Z"
 /></Svg>
  )
    })
