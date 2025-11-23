import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const VectorTwoFillIcon = memo(function VectorTwoFill(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M229.66,197.66l-32,32A8,8,0,0,1,184,224V200H80a8,8,0,0,1-8-8V80H48a8,8,0,0,1-5.66-13.66l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,112,80H88V184h96V160a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,229.66,197.66Z"
 /></Svg>
  )
    })
