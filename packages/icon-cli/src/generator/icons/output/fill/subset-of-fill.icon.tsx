import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const SubsetOfFillIcon = memo(function SubsetOfFill(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,184H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm-64-48h64a8,8,0,0,1,0,16H112a40,40,0,0,1,0-80h64a8,8,0,0,1,0,16H112a24,24,0,0,0,0,48Z"
 /></Svg>
  )
    })
