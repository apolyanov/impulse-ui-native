import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const NumberOneLightIcon = memo(function NumberOneLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M142,48V208a6,6,0,0,1-12,0V58.6L99.09,77.14a6,6,0,0,1-6.18-10.29l40-24A6,6,0,0,1,142,48Z"
 /></Svg>
  )
    })
