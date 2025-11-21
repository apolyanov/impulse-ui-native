import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const LineVerticalRegularIcon = memo(function LineVerticalRegular(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"
 /></Svg>
  )
    })
