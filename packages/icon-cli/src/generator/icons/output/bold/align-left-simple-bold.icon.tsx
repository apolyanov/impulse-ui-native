import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const AlignLeftSimpleBoldIcon = memo(function AlignLeftSimpleBold(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M44,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0ZM244,96v64a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V96A20,20,0,0,1,80,76H224A20,20,0,0,1,244,96Zm-24,4H84v56H220Z"
 /></Svg>
  )
    })
