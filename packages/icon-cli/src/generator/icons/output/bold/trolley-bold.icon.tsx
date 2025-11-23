import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const TrolleyBoldIcon = memo(function TrolleyBold(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M92,224a20,20,0,1,1-20-20A20,20,0,0,1,92,224Zm124-20a20,20,0,1,0,20,20A20,20,0,0,0,216,204Zm24-36H60V75.31a19.86,19.86,0,0,0-5.86-14.14L32.49,39.51a12,12,0,0,0-17,17L36,77v91H32a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24Z"
 /></Svg>
  )
    })
