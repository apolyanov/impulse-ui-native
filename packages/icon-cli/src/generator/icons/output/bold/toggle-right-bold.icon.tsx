import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const ToggleRightBoldIcon = memo(function ToggleRightBold(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M176,52H80a76,76,0,0,0,0,152h96a76,76,0,0,0,0-152Zm0,128H80A52,52,0,0,1,80,76h96a52,52,0,0,1,0,104Zm0-92a40,40,0,1,0,40,40A40,40,0,0,0,176,88Zm0,56a16,16,0,1,1,16-16A16,16,0,0,1,176,144Z"
 /></Svg>
  )
    })
