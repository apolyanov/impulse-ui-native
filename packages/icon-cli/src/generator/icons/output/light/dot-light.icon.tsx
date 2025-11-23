import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const DotLightIcon = memo(function DotLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z"
 /></Svg>
  )
    })
