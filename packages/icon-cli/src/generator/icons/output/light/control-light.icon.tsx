import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const ControlLightIcon = memo(function ControlLight(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M204.24,124.24a6,6,0,0,1-8.48,0L128,56.49,60.24,124.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,124.24Z"
 /></Svg>
  )
    })
