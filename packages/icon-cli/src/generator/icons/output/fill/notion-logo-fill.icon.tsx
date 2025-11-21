import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const NotionLogoFillIcon = memo(function NotionLogoFill(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M224,48a8,8,0,0,1-8,8H200V208a8,8,0,0,1-8,8H152a8,8,0,0,1-7-4.14L72,79.15V200H88a8,8,0,0,1,0,16H40a8,8,0,0,1,0-16H56V56H40a8,8,0,0,1,0-16h64a8,8,0,0,1,7,4.14l73,132.71V56H168a8,8,0,0,1,0-16h48A8,8,0,0,1,224,48Z"
 /></Svg>
  )
    })
