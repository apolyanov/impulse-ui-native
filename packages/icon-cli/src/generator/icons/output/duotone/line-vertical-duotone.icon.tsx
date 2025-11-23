import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const LineVerticalDuotoneIcon = memo(function LineVerticalDuotone(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z"
opacity={0.2}
 /><Path  d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"
 /></Svg>
  )
    })
