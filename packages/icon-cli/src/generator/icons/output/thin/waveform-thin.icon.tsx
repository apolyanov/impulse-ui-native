import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const WaveformThinIcon = memo(function WaveformThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M52,96v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0ZM88,28a4,4,0,0,0-4,4V224a4,4,0,0,0,8,0V32A4,4,0,0,0,88,28Zm40,32a4,4,0,0,0-4,4V192a4,4,0,0,0,8,0V64A4,4,0,0,0,128,60Zm40,32a4,4,0,0,0-4,4v64a4,4,0,0,0,8,0V96A4,4,0,0,0,168,92Zm40-16a4,4,0,0,0-4,4v96a4,4,0,0,0,8,0V80A4,4,0,0,0,208,76Z"
 /></Svg>
  )
    })
