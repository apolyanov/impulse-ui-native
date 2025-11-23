import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const TextBBoldIcon = memo(function TextBBold(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M185.08,114.46A48,48,0,0,0,148,36H80A12,12,0,0,0,68,48V200a12,12,0,0,0,12,12h80a52,52,0,0,0,25.08-97.54ZM92,60h56a24,24,0,0,1,0,48H92Zm68,128H92V132h68a28,28,0,0,1,0,56Z"
 /></Svg>
  )
    })
