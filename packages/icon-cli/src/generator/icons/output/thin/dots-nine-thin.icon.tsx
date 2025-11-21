import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const DotsNineThinIcon = memo(function DotsNineThin(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M68,60a8,8,0,1,1-8-8A8,8,0,0,1,68,60Zm60-8a8,8,0,1,0,8,8A8,8,0,0,0,128,52Zm68,16a8,8,0,1,0-8-8A8,8,0,0,0,196,68ZM60,120a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,128,120Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120ZM60,188a8,8,0,1,0,8,8A8,8,0,0,0,60,188Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,128,188Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,196,188Z"
 /></Svg>
  )
    })
