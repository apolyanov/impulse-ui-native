import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const UniteSquareFillIcon = memo(function UniteSquareFill(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M224,96V216a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V168H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H160a8,8,0,0,1,8,8V88h48A8,8,0,0,1,224,96Z"
 /></Svg>
  )
    })
