import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const NumberSixBoldIcon = memo(function NumberSixBold(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M128,100a59.21,59.21,0,0,0-7.81.53l26.27-46.64a12,12,0,0,0-20.92-11.78L76,130.13A60,60,0,1,0,128,100Zm0,96a36,36,0,1,1,36-36A36,36,0,0,1,128,196Z"
 /></Svg>
  )
    })
