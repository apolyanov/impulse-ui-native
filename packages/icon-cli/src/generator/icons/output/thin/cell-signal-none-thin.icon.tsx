import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const CellSignalNoneThinIcon = memo(function CellSignalNoneThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M44,192v8a4,4,0,0,1-8,0v-8a4,4,0,0,1,8,0Z"
 /></Svg>
  )
    })
