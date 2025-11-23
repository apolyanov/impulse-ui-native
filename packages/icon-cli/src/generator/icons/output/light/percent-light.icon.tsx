import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const PercentLightIcon = memo(function PercentLight(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M204.24,60.23l-144,144a6,6,0,0,1-8.48-8.48l144-144a6,6,0,1,1,8.48,8.49ZM52,100A34,34,0,1,1,76,110,33.78,33.78,0,0,1,52,100Zm2-24a22,22,0,1,0,6.44-15.56A21.86,21.86,0,0,0,54,76ZM214,180A34,34,0,1,1,204,156,33.78,33.78,0,0,1,214,180Zm-12,0a21.87,21.87,0,0,0-6.44-15.56h0A22,22,0,1,0,202,180Z"
 /></Svg>
  )
    })
