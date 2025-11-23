import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const TextUnderlineLightIcon = memo(function TextUnderlineLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M198,224a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H192A6,6,0,0,1,198,224Zm-70-26a62.07,62.07,0,0,0,62-62V56a6,6,0,0,0-12,0v80a50,50,0,0,1-100,0V56a6,6,0,0,0-12,0v80A62.07,62.07,0,0,0,128,198Z"
 /></Svg>
  )
    })
