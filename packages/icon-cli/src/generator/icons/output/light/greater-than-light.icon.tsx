import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const GreaterThanLightIcon = memo(function GreaterThanLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M222,128a6,6,0,0,1-3.43,5.42l-152,72a6,6,0,1,1-5.14-10.84L202,128,61.43,61.42a6,6,0,1,1,5.14-10.84l152,72A6,6,0,0,1,222,128Z"
 /></Svg>
  )
    })
