import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const LinkSimpleHorizontalDuotoneIcon = memo(function LinkSimpleHorizontalDuotone(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M240,128h0a48,48,0,0,1-48,48H64a48,48,0,0,1-48-48h0A48,48,0,0,1,64,80H192A48,48,0,0,1,240,128Z"
opacity={0.2}
 /><Path  d="M80,120h96a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16Zm24,48H64a40,40,0,0,1,0-80h40a8,8,0,0,0,0-16H64a56,56,0,0,0,0,112h40a8,8,0,0,0,0-16Zm88-96H152a8,8,0,0,0,0,16h40a40,40,0,0,1,0,80H152a8,8,0,0,0,0,16h40a56,56,0,0,0,0-112Z"
 /></Svg>
  )
    })
