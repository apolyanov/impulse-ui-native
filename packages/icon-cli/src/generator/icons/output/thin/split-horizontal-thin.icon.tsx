import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const SplitHorizontalThinIcon = memo(function SplitHorizontalThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M108,48V208a4,4,0,0,1-8,0V132H33.66l25.17,25.17a4,4,0,0,1-5.66,5.66l-32-32a4,4,0,0,1,0-5.66l32-32a4,4,0,0,1,5.66,5.66L33.66,124H100V48a4,4,0,0,1,8,0Zm126.83,77.17-32-32a4,4,0,0,0-5.66,5.66L222.34,124H156V48a4,4,0,0,0-8,0V208a4,4,0,0,0,8,0V132h66.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,234.83,125.17Z"
 /></Svg>
  )
    })
