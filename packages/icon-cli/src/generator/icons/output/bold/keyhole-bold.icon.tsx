import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const KeyholeBoldIcon = memo(function KeyholeBold(props: SvgProps) {
        return (
    <Svg viewBox="0 0 256 256"
fill={props.color}
 ><Path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm0-144a44,44,0,0,0-33.61,72.41l-9.86,32.06A12,12,0,0,0,96,188h64a12,12,0,0,0,11.47-15.53l-9.86-32.06A44,44,0,0,0,128,68Zm8.53,72.51L143.75,164h-31.5l7.22-23.49a12,12,0,0,0-4-12.89,20,20,0,1,1,25,0A12,12,0,0,0,136.53,140.51Z"
 /></Svg>
  )
    })
