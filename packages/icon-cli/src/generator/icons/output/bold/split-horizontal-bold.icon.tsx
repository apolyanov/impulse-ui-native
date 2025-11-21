import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const SplitHorizontalBoldIcon = memo(function SplitHorizontalBold(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M116,48V208a12,12,0,0,1-24,0V140H53l11.52,11.51a12,12,0,0,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,1,1,17,17L53,116H92V48a12,12,0,0,1,24,0Zm124.49,71.51-32-32a12,12,0,0,0-17,17L203,116H164V48a12,12,0,0,0-24,0V208a12,12,0,0,0,24,0V140h39l-11.52,11.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,240.49,119.51Z"
 /></Svg>
  )
    })
