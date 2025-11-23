import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const BracketsSquareThinIcon = memo(function BracketsSquareThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M44,44V212H80a4,4,0,0,1,0,8H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H80a4,4,0,0,1,0,8Zm172-8H176a4,4,0,0,0,0,8h36V212H176a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36Z"
 /></Svg>
  )
    })
