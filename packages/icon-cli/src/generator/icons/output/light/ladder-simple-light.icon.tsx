import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const LadderSimpleLightIcon = memo(function LadderSimpleLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M192,26a6,6,0,0,0-6,6V66H70V32a6,6,0,0,0-12,0V224a6,6,0,0,0,12,0V190H186v34a6,6,0,0,0,12,0V32A6,6,0,0,0,192,26Zm-6,52v44H70V78ZM70,178V134H186v44Z"
 /></Svg>
  )
    })
