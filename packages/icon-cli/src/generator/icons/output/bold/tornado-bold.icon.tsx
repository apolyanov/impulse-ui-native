import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const TornadoBoldIcon = memo(function TornadoBold(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M232,44a12,12,0,0,1-12,12H60a12,12,0,0,1,0-24H220A12,12,0,0,1,232,44ZM176,88a12,12,0,0,0-12-12H44a12,12,0,0,0,0,24H164A12,12,0,0,0,176,88Zm0,44a12,12,0,0,0-12-12H76a12,12,0,0,0,0,24h88A12,12,0,0,0,176,132Zm-4,32H132a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm-32,44H124a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"
 /></Svg>
  )
    })
