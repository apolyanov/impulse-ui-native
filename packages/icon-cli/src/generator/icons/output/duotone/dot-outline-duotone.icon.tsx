import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const DotOutlineDuotoneIcon = memo(function DotOutlineDuotone(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Z"
opacity={0.2}
 /><Path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
 /></Svg>
  )
    })
