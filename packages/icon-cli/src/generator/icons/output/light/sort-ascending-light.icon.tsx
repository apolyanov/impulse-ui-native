import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const SortAscendingLightIcon = memo(function SortAscendingLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M126,128a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12h72A6,6,0,0,1,126,128ZM48,70H184a6,6,0,0,0,0-12H48a6,6,0,0,0,0,12Zm56,116H48a6,6,0,0,0,0,12h56a6,6,0,0,0,0-12Zm124.24-22.24a6,6,0,0,0-8.48,0L190,193.51V112a6,6,0,0,0-12,0v81.51l-29.76-29.75a6,6,0,0,0-8.48,8.48l40,40a6,6,0,0,0,8.48,0l40-40A6,6,0,0,0,228.24,163.76Z"
 /></Svg>
  )
    })
