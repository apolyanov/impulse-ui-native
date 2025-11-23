import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const CaretCircleLeftLightIcon = memo(function CaretCircleLeftLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM148.24,92.24,112.49,128l35.75,35.76a6,6,0,1,1-8.48,8.48l-40-40a6,6,0,0,1,0-8.48l40-40a6,6,0,0,1,8.48,8.48Z"
 /></Svg>
  )
    })
