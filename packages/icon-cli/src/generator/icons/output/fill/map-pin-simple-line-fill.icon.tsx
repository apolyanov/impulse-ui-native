import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const MapPinSimpleLineFillIcon = memo(function MapPinSimpleLineFill(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h80V135.42a56,56,0,1,1,16,0V208h80A8,8,0,0,1,224,216Z"
 /></Svg>
  )
    })
