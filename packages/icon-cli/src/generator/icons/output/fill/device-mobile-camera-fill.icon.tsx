import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const DeviceMobileCameraFillIcon = memo(function DeviceMobileCameraFill(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM128,72a12,12,0,1,1,12-12A12,12,0,0,1,128,72Z"
 /></Svg>
  )
    })
