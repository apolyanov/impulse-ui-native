import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const TextHFourLightIcon = memo(function TextHFourLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M150,56V176a6,6,0,0,1-12,0V122H46v54a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v54h92V56a6,6,0,0,1,12,0ZM254,184a6,6,0,0,1-6,6H238v18a6,6,0,0,1-12,0V190H176a6,6,0,0,1-4.74-9.68l56-72A6,6,0,0,1,238,112v66h10A6,6,0,0,1,254,184Zm-28-54.51L188.27,178H226Z"
 /></Svg>
  )
    })
