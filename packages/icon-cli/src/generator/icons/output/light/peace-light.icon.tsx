import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const PeaceLightIcon = memo(function PeaceLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.44,89.44,0,0,1-13,46.58l-71-49.7V38.2A90.12,90.12,0,0,1,218,128ZM122,38.2v86.68l-71,49.7A90,90,0,0,1,122,38.2ZM57.92,184.4,122,139.53V217.8A89.93,89.93,0,0,1,57.92,184.4ZM134,217.8V139.53l64.08,44.87A89.93,89.93,0,0,1,134,217.8Z"
 /></Svg>
  )
    })
