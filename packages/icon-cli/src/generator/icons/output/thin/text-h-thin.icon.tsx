import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const TextHThinIcon = memo(function TextHThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M204,56V200a4,4,0,0,1-8,0V132H60v68a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0v68H196V56a4,4,0,0,1,8,0Z"
 /></Svg>
  )
    })
