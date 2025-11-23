import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const RadioButtonLightIcon = memo(function RadioButtonLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm0-144a54,54,0,1,0,54,54A54.06,54.06,0,0,0,128,74Zm0,96a42,42,0,1,1,42-42A42,42,0,0,1,128,170Z"
 /></Svg>
  )
    })
