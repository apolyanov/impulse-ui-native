import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const IntersectSquareThinIcon = memo(function IntersectSquareThin(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M216,92H164V40a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V160a4,4,0,0,0,4,4H92v52a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4V96A4,4,0,0,0,216,92ZM44,156V44H156V92H96a4,4,0,0,0-4,4v60Zm56-50.34L150.34,156H100Zm56,44.68L105.66,100H156ZM212,212H100V164h60a4,4,0,0,0,4-4V100h48Z"
 /></Svg>
  )
    })
