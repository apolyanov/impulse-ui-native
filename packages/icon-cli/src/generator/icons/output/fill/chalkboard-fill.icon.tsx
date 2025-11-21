import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const ChalkboardFillIcon = memo(function ChalkboardFill(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-24,0H144V176a8,8,0,0,1,8-8h56a8,8,0,0,1,8,8Zm0-48a8,8,0,0,1-16,0V72H56V184a8,8,0,0,1-16,0V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Z"
 /></Svg>
  )
    })
