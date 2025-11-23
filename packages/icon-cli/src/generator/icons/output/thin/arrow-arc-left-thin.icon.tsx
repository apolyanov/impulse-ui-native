import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const ArrowArcLeftThinIcon = memo(function ArrowArcLeftThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M228,184a4,4,0,0,1-8,0A92,92,0,0,0,63,119L33.7,148H88a4,4,0,0,1,0,8H24a4,4,0,0,1-4-4V88a4,4,0,0,1,8,0v54.39l29.3-29.11A100,100,0,0,1,228,184Z"
 /></Svg>
  )
    })
