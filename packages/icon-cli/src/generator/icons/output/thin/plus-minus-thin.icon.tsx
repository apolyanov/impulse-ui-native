import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const PlusMinusThinIcon = memo(function PlusMinusThin(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M202.83,58.83l-144,144a4,4,0,0,1-5.66-5.66l144-144a4,4,0,1,1,5.66,5.66ZM68,112a4,4,0,0,0,8,0V76h36a4,4,0,0,0,0-8H76V32a4,4,0,0,0-8,0V68H32a4,4,0,0,0,0,8H68Zm156,68H144a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8Z"
 /></Svg>
  )
    })
