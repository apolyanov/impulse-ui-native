import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const SortDescendingThinIcon = memo(function SortDescendingThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M44,128a4,4,0,0,1,4-4h72a4,4,0,0,1,0,8H48A4,4,0,0,1,44,128Zm4-60h56a4,4,0,0,0,0-8H48a4,4,0,0,0,0,8ZM184,188H48a4,4,0,0,0,0,8H184a4,4,0,0,0,0-8ZM226.83,85.17l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66L180,57.66V144a4,4,0,0,0,8,0V57.66l33.17,33.17a4,4,0,1,0,5.66-5.66Z"
 /></Svg>
  )
    })
