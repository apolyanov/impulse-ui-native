import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const AvocadoFillIcon = memo(function AvocadoFill(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M211,130.66,181.2,46.47a56,56,0,0,0-106-1.14h0l-29.51,83.5A88,88,0,1,0,211,130.66ZM128,200a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z"
 /></Svg>
  )
    })
