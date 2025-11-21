import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const DoorOpenThinIcon = memo(function DoorOpenThin(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M232,220H204V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V220H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM196,40V220H172V36h20A4,4,0,0,1,196,40ZM60,40a4,4,0,0,1,4-4H164V220H60Zm80,92a8,8,0,1,1-8-8A8,8,0,0,1,140,132Z"
 /></Svg>
  )
    })
