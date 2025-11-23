import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const VectorTwoBoldIcon = memo(function VectorTwoBold(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M232.49,200.49l-32,32a12,12,0,0,1-17-17L195,204H80a12,12,0,0,1-12-12V69L56.49,80.49a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0l32,32a12,12,0,0,1-17,17L92,69V180H195l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,232.49,200.49Z"
 /></Svg>
  )
    })
