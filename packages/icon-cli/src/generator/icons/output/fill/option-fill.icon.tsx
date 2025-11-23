import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const OptionFillIcon = memo(function OptionFill(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,176H152.94a15.92,15.92,0,0,1-14.31-8.84L103.06,96H56a8,8,0,0,1,0-16h47.06a15.92,15.92,0,0,1,14.31,8.84L152.94,160H200a8,8,0,0,1,0,16Zm0-80H152a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z"
 /></Svg>
  )
    })
