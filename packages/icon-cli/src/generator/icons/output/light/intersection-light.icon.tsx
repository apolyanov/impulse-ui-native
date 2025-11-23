import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const IntersectionLightIcon = memo(function IntersectionLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M206,120v80a6,6,0,0,1-12,0V120a66,66,0,0,0-132,0v80a6,6,0,0,1-12,0V120a78,78,0,0,1,156,0Z"
 /></Svg>
  )
    })
