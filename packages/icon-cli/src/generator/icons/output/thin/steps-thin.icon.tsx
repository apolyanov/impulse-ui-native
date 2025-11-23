import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const StepsThinIcon = memo(function StepsThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M244,56a4,4,0,0,1-4,4H188v44a4,4,0,0,1-4,4H132v44a4,4,0,0,1-4,4H76v44a4,4,0,0,1-4,4H16a4,4,0,0,1,0-8H68V152a4,4,0,0,1,4-4h52V104a4,4,0,0,1,4-4h52V56a4,4,0,0,1,4-4h56A4,4,0,0,1,244,56Z"
 /></Svg>
  )
    })
