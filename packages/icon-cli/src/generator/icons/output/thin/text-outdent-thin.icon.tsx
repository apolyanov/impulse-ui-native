import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const TextOutdentThinIcon = memo(function TextOutdentThin(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M220,128a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM112,68H216a4,4,0,0,0,0-8H112a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM72,140a4,4,0,0,0,2.83-6.83L37.66,96,74.83,58.83a4,4,0,0,0-5.66-5.66l-40,40a4,4,0,0,0,0,5.66l40,40A4,4,0,0,0,72,140Z"
 /></Svg>
  )
    })
