import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const ListBulletsThinIcon = memo(function ListBulletsThin(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M84,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H88A4,4,0,0,1,84,64Zm132,60H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,64H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM44,120a8,8,0,1,0,8,8A8,8,0,0,0,44,120Zm0-64a8,8,0,1,0,8,8A8,8,0,0,0,44,56Zm0,128a8,8,0,1,0,8,8A8,8,0,0,0,44,184Z"
 /></Svg>
  )
    })
