import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const ResizeBoldIcon = memo(function ResizeBold(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M136,108H48a12,12,0,0,0-12,12v88a12,12,0,0,0,12,12h88a12,12,0,0,0,12-12V120A12,12,0,0,0,136,108Zm-12,88H60V132h64Zm96-8v12a20,20,0,0,1-20,20H180a12,12,0,0,1,0-24h16v-8a12,12,0,0,1,24,0Zm0-72v24a12,12,0,0,1-24,0V116a12,12,0,0,1,24,0Zm0-60V72a12,12,0,0,1-24,0V60H184a12,12,0,0,1,0-24h16A20,20,0,0,1,220,56Zm-68-8a12,12,0,0,1-12,12H116a12,12,0,0,1,0-24h24A12,12,0,0,1,152,48ZM36,76V56A20,20,0,0,1,56,36H68a12,12,0,0,1,0,24H60V76a12,12,0,0,1-24,0Z"
 /></Svg>
  )
    })
