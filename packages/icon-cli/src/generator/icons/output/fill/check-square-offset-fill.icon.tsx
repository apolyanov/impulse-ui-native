import { memo } from 'react'
    import Svg, { Path } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg'
    export const CheckSquareOffsetFillIcon = memo(function CheckSquareOffsetFill(props: SvgProps) {
        return (
    <Svg {...props} viewBox="0 0 256 256"
fill={props.color}
 ><Path  d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,200a8,8,0,0,1-5.66-2.34l-16-16a8,8,0,0,1,11.32-11.32L80,180.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-40,40A8,8,0,0,1,80,200Zm120-8a8,8,0,0,1-8,8H136a8,8,0,0,1,0-16h48V72H72v64a8,8,0,0,1-16,0V64a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z"
 /></Svg>
  )
    })
