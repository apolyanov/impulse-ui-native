import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const PersonSimpleCircleThinIcon = memo(function PersonSimpleCircleThin(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80Zm64,32a4,4,0,0,1-4,4H132v18.79l31.33,47a4,4,0,0,1-6.66,4.44l-28.67-43-28.67,43a4,4,0,1,1-6.66-4.44l31.33-47V116H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,112Z"
 /></Svg>
  )
    })
