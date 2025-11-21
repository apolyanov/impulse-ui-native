import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const LineVerticalBoldIcon = memo(function LineVerticalBold(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M140,24V232a12,12,0,0,1-24,0V24a12,12,0,0,1,24,0Z"
 /></Svg>
  )
    })
