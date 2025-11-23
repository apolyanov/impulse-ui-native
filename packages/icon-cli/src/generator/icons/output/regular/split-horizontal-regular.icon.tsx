import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const SplitHorizontalRegularIcon = memo(function SplitHorizontalRegular(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M112,48V208a8,8,0,0,1-16,0V136H43.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L43.31,120H96V48a8,8,0,0,1,16,0Zm125.66,74.34-32-32a8,8,0,0,0-11.32,11.32L212.69,120H160V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V136h52.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,237.66,122.34Z"
 /></Svg>
  )
    })
