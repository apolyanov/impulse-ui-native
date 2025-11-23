import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const VoicemailThinIcon = memo(function VoicemailThin(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M200,76a52,52,0,0,0-27.66,96H83.66A52,52,0,1,0,56,180H200a52,52,0,0,0,0-104ZM12,128a44,44,0,1,1,44,44A44.05,44.05,0,0,1,12,128Zm188,44a44,44,0,1,1,44-44A44.05,44.05,0,0,1,200,172Z"
 /></Svg>
  )
    })
