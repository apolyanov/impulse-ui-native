import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const GolfFillIcon = memo(function GolfFill(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M175.47,197.14a8,8,0,0,1-4.61,10.33A125.91,125.91,0,0,1,136,215.68V248a8,8,0,0,1-16,0V215.68a125.91,125.91,0,0,1-34.86-8.21,8,8,0,1,1,5.72-14.94C104,197.56,116.15,200,128,200s24-2.44,37.14-7.47A8,8,0,0,1,175.47,197.14ZM216,96A88,88,0,1,1,128,8,88.1,88.1,0,0,1,216,96Zm-72,36a12,12,0,1,0-12,12A12,12,0,0,0,144,132Zm32-32a12,12,0,1,0-12,12A12,12,0,0,0,176,100Z"
 /></Svg>
  )
    })
