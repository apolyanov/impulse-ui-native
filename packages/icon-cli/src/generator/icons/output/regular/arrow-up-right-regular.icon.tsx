import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const ArrowUpRightRegularIcon = memo(function ArrowUpRightRegular(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
 /></Svg>
  )
    })
